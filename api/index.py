from flask import Flask, jsonify, request
from typing import List, Dict, Tuple, Union, Any
from nba_api.stats.static import players
from dotenv import load_dotenv
from Routes.BallDontLie.index import bdl
from Routes.Nba.index import nba
from flask_cors import CORS, cross_origin

load_dotenv()

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Blueprint for architecture routing
app.register_blueprint(bdl)
app.register_blueprint(nba)

