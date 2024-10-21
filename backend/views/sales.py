""" Module contains endpoints concerning sales """
from flask import Blueprint, jsonify, abort, request, session
from models.db import getDB


sales = Blueprint('sales', __name__)

@sales.post('/checkout') # chnge to post request
def checkout():
  """ handles checkout """
  from app import mail
  try:
    data = request.json
  except:
    abort(415, 'invalid json body')

  msg = 'Congratulations! Here is your receipt\n'
  msg += str(data.get('cartItems')) + '\n'

  client_email = data.get('email')

  try:
    mail.sendMail('Giro Purchase Receipts', client_email, msg)
    return jsonify({'status': 201, 'msg': 'sales created'}), 201
  except Exception as e:
    print(e)
    return jsonify({'status': 401, 'msg': 'Sales not successfull'}), 401
#   user_id = request.cookies.get('token')
#   return jsonify({'status': 201, 'msg': 'sales created'}), 201

'''
  if 'user_id' not in session:
    abort(401, "Not Authorized: You are not logged in!")

  user_id = session['user_id']

  db = getDB()
  cur = db.cursor()
  cur.execute('SELECT address, email, firstname, lastname, phone_number FROM users WHERE id = ?', (user_id, ))
  user = dict(cur.fetchone())

  db.close()
  cur.close()
  
  # constrtuct email here
  message = \
  """

  """

  msg = 'Congratulations! Here is your receipt'

  client_email = 'michael_k70@ymail.com'
  try:
    mail.sendMail('Giro Purchase Receipts', client_email, msg)
    return jsonify({'status': 201, 'msg': 'sales created'}), 201
  except Exception as e:
    print(e)
    return jsonify({'status': 401, 'msg': 'Sales not successfull'}), 401
'''

