from flask import Blueprint, jsonify, abort
from models.db import getDB



# from ..app import mail


sales = Blueprint('sales', __name__)

@sales.get('/checkout')
def checkout():
  from app import mail

  msg = 'Congratulations! Here is your receipt'

  client_email = 'michael_k70@ymail.com'
  try:
    mail.sendMail('Giro Purchase Receipts', client_email, msg)
    return jsonify({'status': 201, 'msg': 'sales created'}), 201
  except Exception as e:
    print(e)
    return jsonify({'status': 401, 'msg': 'Sales not successfull'}), 401
