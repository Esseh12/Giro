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


