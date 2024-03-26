from flask import Blueprint, request, jsonify
from Routes.Nba.player import nba_players
from Routes.Nba.team import nba_teams

nba = Blueprint('nba_api', __name__, url_prefix='/api/nba')

nba.register_blueprint(nba_players)
nba.register_blueprint(nba_teams)
