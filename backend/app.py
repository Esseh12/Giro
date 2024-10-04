from flask import Flask, jsonify
import os
from views.products import products
from views.index import index
from views.users import users
from models.db import initDB

# Initialize database
initDB()

# initialize flask app
app = Flask(__name__)
app.url_map.strict_slashes = False

# register all blueprints
app.register_blueprint(index, url_prefix='/')
app.register_blueprint(products, url_prefix='/products')
app.register_blueprint(users, url_prefix='/auth')


@app.errorhandler(400)
def handle_400(error):
  return jsonify({'error': error.description, 'status': error.code}), 400

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
