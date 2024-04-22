from flask import Blueprint

from players import bdl_players
from teams import bdl_teams
from games import bdl_games
from stats import bdl_stats

bdl = Blueprint('bdl', __name__, url_prefix='/api/bdl')

bdl.register_blueprint(bdl_players)
bdl.register_blueprint(bdl_teams)
bdl.register_blueprint(bdl_games)
bdl.register_blueprint(bdl_stats)



