from flask import Flask, jsonify, request
from typing import List, Dict, Tuple, Union, Any
from nba_api.stats.static import players
from dotenv import load_dotenv
from Routes.BallDontLie.index import bdl
from Routes.Nba.index import nba
load_dotenv()

app = Flask(__name__)

# Blueprint for architecture routing
app.register_blueprint(bdl)
app.register_blueprint(nba)

@app.route("/api/players/<player_name>", methods = ['GET'])
def find_player(player_name: str) -> Union[List[Dict[str, Any]], Tuple[Dict[str,Any], int]]:
    """
    Get information about an NBA player by their full name.

    Parameters:
    - player_name (str): The full name of the NBA player.

    Returns:
    - JSON object: Information about the NBA player including their name, team, position, etc.
      If the player is not found, returns an empty JSON object.

    Example:
    ```
    GET /api/players/Lebron James
    {
            "first_name": "LeBron",
            "full_name": "LeBron James",
            "id": 2544,
            "is_active": true,
            "last_name": "James"
    }
    ```
    """
    if request.method == 'GET':
        try:
            nba_player = players.find_players_by_full_name(player_name)
            return jsonify(nba_player)
        except Exception as e:
            return jsonify({'error': str(e)}), 500


