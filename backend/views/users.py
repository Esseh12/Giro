"""
This module contains route for the users activities like login, signup etc
"""
from flask import Blueprint, jsonify, request, abort, make_response
from models.db import getDB
from werkzeug.security import generate_password_hash, check_password_hash
from uuid import uuid4


users = Blueprint('users', __name__)

@users.post('/signup')
def signup():
  if request.content_type != 'application/json':
    abort(415, "Unsupported Media Type: Please supply a json body")
  data = request.json

  fname = data.get('firstname')
  lname = data.get('lastname')
  email = data.get('email')
  phone = data.get('phone_number')
  passwd = data.get('password')

  for i in [fname, lname, email, passwd]:
    if i == None:
      abort(400, 'Required: firstname, lastname, email, password')

  passwd = generate_password_hash(passwd)

  db = getDB()
  cur = db.cursor()

  id = str(uuid4())
  try:
    cur.execute("INSERT INTO users (id, firstname, lastname, email, phone_number, password) VALUES(?, ?, ?, ?, ?, ?)", (id, fname, lname, email, phone, passwd,))
    db.commit()
  except db.IntegrityError:
    cur.close()
    db.close()
    abort(400, "Email Exists!")

  cur.execute("SELECT id, address, email, firstname, lastname, phone_number FROM users WHERE id = ?", (id, ))
  user = dict(cur.fetchone())
  cur.close()
  db.close()

  return jsonify({'data': user, "status": 201}), 201



@users.post("/login")
def login():
  if request.content_type != 'application/json':
    abort(415, "Unsupported Media Type: Please supply a json body")
  data = request.json
  email = data.get("email")
  passwd = data.get("password")

  if not email or not passwd:
      abort(403, "Required: email and password required")

  db = getDB()
  cur = db.cursor()

  user = cur.execute("SELECT * FROM users WHERE email = ?;", (email, )).fetchone()

  if not user:
    cur.close()
    db.close()
    abort(403, "No User with that email")

  user = dict(user)
  user_pass = user.get("password")
  if not check_password_hash(user_pass, passwd):
    cur.close()
    db.close()
    abort(403, "Password Incorrect!")

  cur.close()
  db.close()
  new_obj = {x: user[x] for x in user.keys() if x != "password"}

  res = make_response(jsonify({"data": new_obj, "status": 200}))
  res.set_cookie("token", user.get('id'))
  return res, 200


@users.get('/profile')
def profile():
  # print(list(request.cookies.items()))
  user_id = request.cookies.get('token')
  if not user_id:
    abort(401, "Not Authorized: You are not logged in!")

  db = getDB()
  cur = db.cursor()
  cur.execute('SELECT address, email, firstname, lastname, id, phone_number FROM users WHERE id = ?', (user_id, ))
  user = cur.fetchone()

  return jsonify({"data": dict(user), 'status': 200})


@users.get('/logout')
def logout():
  res = make_response(
    jsonify(
      {'msg': 'logged out successfully', 'status': 200}
    )
  )
  res.set_cookie('token', '', expires=0)
  return res


@users.put('/profile')
def update_profile():
  if request.content_type != 'application/json':
    abort(415, "Unsupported Media Type: Please supply a json body")

  if request.method == 'PUT':
    data = request.json

    first_name = data.get('firstname')
    last_name = data.get('lastname')
    email = data.get('email')
    phone = data.get('phone_number')
    passwd = data.get('password')

  if not (first_name and last_name and email and phone and passwd):
    abort(400, 'Required: firstname, lastname, email, phone_number, password')

  db = getDB()
  cur = db.cursor()

  user_id = request.cookies.get('token')
  if not user_id:
    abort(401, "Not Authorized: You are not logged in!")

  cur.execute("SELECT id, password FROM users WHERE id = ?", (user_id, ))
  user = cur.fetchone()
  user = dict(user)

  if not user:
    cur.close()
    db.close()
    abort(404, "User not found!")

  if not check_password_hash(user.get('password'), passwd):
    cur.close()
    db.close()
    abort(403, "Password Incorrect!")

  cur.execute("UPDATE users SET firstname = ?, lastname = ?, email = ?, phone_number = ? WHERE id = ?", (first_name, last_name, email, phone, user_id, ))
  db.commit()
  cur.close()
  db.close()

  return jsonify({'msg': 'Profile updated successfully', 'status': 200})
