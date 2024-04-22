from flask import Blueprint

from api.Routes.BallDontLie.players import bdl_players
from api.Routes.BallDontLie.teams import bdl_teams
from api.Routes.BallDontLie.games import bdl_games
from api.Routes.BallDontLie.stats import bdl_stats

bdl = Blueprint('bdl', __name__, url_prefix='/api/bdl')

bdl.register_blueprint(bdl_players)
bdl.register_blueprint(bdl_teams)
bdl.register_blueprint(bdl_games)
bdl.register_blueprint(bdl_stats)



