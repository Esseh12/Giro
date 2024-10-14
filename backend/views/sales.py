from flask import Blueprint, jsonify, abort, request
from models.db import getDB



# from ..app import mail


sales = Blueprint('sales', __name__)

@sales.post('/checkout') # chnge to post request
def checkout():
  from app import mail

  user_id = request.cookies.get('token')
  if not user_id:
    abort(401, "Not Authorized: You are not logged in!")

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
