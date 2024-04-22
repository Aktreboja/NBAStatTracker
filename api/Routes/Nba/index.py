from flask import Blueprint, request, jsonify
from api.Routes.Nba.player import nba_players
from api.Routes.Nba.team import nba_teams

nba = Blueprint('nba_api', __name__, url_prefix='/api/nba')

nba.register_blueprint(nba_players)
nba.register_blueprint(nba_teams)
