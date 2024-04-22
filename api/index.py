from flask import Flask, jsonify, request
from dotenv import load_dotenv
from api.Routes.BallDontLie.index import bdl
from api.Routes.Nba.index import nba
from flask_cors import CORS
import logging

load_dotenv()

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Blueprint for architecture routing
app.register_blueprint(bdl)
app.register_blueprint(nba)

# Error handler for Not found
@app.errorhandler(404)
def not_found(error):
    requested_url = request.url
    logging.error(f"404 Error: {requested_url} was not found.")
    return jsonify({'error': 'Not found', 'requested_url': requested_url}), 404



@app.route("/api/health")
def health_check():
    return jsonify({"message": "Web API is up"})