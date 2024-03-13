from flask import Blueprint, request, jsonify
import os
import requests
from Routes.BallDontLie.players import bdl_players
from Routes.BallDontLie.teams import bdl_teams

bdl = Blueprint('bdl', __name__, url_prefix='/api/bdl')

bdl.register_blueprint(bdl_players)
bdl.register_blueprint(bdl_teams)


