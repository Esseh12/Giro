from flask import Flask, jsonify
from flask_cors import CORS
import os
from views.index import index
from views.products import products
from views.users import users
from views.sales import sales
from models.db import initDB
from models.mail import Email

# Initialize database
initDB()

ENABLE_EMAIL_SERVICE = os.getenv('ENABLE_EMAIL_SERVICE', 'False')

if ENABLE_EMAIL_SERVICE == 'True':  # so that app can run successfully without email errors
  mail = Email()

# initialize flask app
app = Flask(__name__)

# HANDLE cors
CORS(app, supports_credentials=True)
# app.config['FLASK_PORT'] = 5050
app.url_map.strict_slashes = False

# register all blueprints
app.register_blueprint(index, url_prefix='/')
app.register_blueprint(products, url_prefix='/products')
app.register_blueprint(users, url_prefix='/auth')

# This is necessary for email compatibility. 
if ENABLE_EMAIL_SERVICE == 'True':
  app.register_blueprint(sales)


@app.errorhandler(400)
def handle_400(error):
  return jsonify({'error': error.description, 'status': error.code}), 400

@app.errorhandler(401)
def handle_400(error):
  return jsonify({'error': error.description, 'status': error.code}), 401


@app.errorhandler(403)
def handle_403(error):
  return jsonify({'error': error.description, 'status': error.code}), 403


@app.errorhandler(404)
def handle_404(error):
  return jsonify({'error': error.description, 'status': error.code}), 404


@app.errorhandler(415)
def handle_415(error):
  return jsonify({'error': error.description, 'status': error.code}), 415

# if __name__ == "__main__":
#   host = os.getenv('HOST')
#   port = os.getenv('PORT')

#   app.run(host, port)
