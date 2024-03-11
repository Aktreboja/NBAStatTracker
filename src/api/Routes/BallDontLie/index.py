from flask import Blueprint, request, jsonify
import os
import requests
from Routes.BallDontLie.players import bdl_players

bdl = Blueprint('bdl', __name__, url_prefix='/api/bdl')

bdl.register_blueprint(bdl_players)
