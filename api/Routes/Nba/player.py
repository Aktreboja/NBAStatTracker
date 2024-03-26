from flask import request, Blueprint
from nba_api.stats.static.players import find_players_by_full_name, find_players_by_first_name, find_players_by_last_name, get_active_players
from nba_api.stats.static import players
from flask_cors import cross_origin

nba_players = Blueprint('nba_players', __name__, url_prefix="/players")

@nba_players.route('/player')
@cross_origin()
def find_player_by_full_name():

    """
    Finds player by full name in NBA API



    Returns:
    - JSON object: Information about the NBA player including their name, team, position, etc.
      If the player is not found, returns an empty JSON object.

    Example:
    ```
    GET /api/nba/players/player?first_name=Lebron&last_name=JAmes
    [
        {
        "first_name": "LeBron",
        "full_name": "LeBron James",
        "id": 2544,
        "is_active": true,
        "last_name": "James"
        }
    ]
    ```
    """
    first_name = request.args.get('first_name')
    last_name = request.args.get('last_name')

    if first_name and last_name:
        player = find_players_by_full_name(f'{first_name} {last_name}')
    elif first_name:
        player = find_players_by_first_name(first_name)
    elif last_name:
        player = find_players_by_last_name(last_name)
    else:
        return "no Query Parameters provided"
    return player



@nba_players.route('/active_players', methods = ['GET'])
@cross_origin()
def get_active_players():
    response = players.get_active_players()
    return response


