from flask import Blueprint, request, jsonify
import os
import requests

bdl_players = Blueprint('bdl_players', __name__, url_prefix='/players')

@bdl_players.route('/<player_id>', methods = ['GET'])
def find_bdl_player(player_id : float):
    """
    Get information about an NBA player from the BallDontLieAPI by their id.

    Parameters:
    - player_name (str): The Id of the player

    Returns:
    - JSON object: Information about the NBA player including their name, team, position, etc.
      If the player is not found, returns an empty JSON object.

    Example:
    ```
    GET /api/players/1
    {
        "data": {
        "college": "FC Barcelona",
        "country": "Spain",
        "draft_number": 32,
        "draft_round": 2,
        "draft_year": 2013,
        "first_name": "Alex",
        "height": "6-6",
        "id": 1,
        "jersey_number": "8",
        "last_name": "Abrines",
        "position": "G",
        "team": {
            "abbreviation": "OKC",
            "city": "Oklahoma City",
            "conference": "West",
            "division": "Northwest",
            "full_name": "Oklahoma City Thunder",
            "id": 21,
            "name": "Thunder"
        },
        "weight": "190"
        }
    }
    ```
    """
    if request.method == 'GET':
        try:

            player_request = requests.get(os.getenv('BALLDONTLIE_API_BASEURL')  + f'/players/{player_id}', headers={'Authorization': os.getenv('BALLDONTLIE_API_KEY')})
            return player_request.json()
        except Exception as e:
            return jsonify({'Error': str(e)}), 500
        

@bdl_players.route('/search', methods = ['GET'])
def search_player():
    if request.method == 'GET':
        try:
            # Request Query Parameters
            first_name_query = request.args.get('first_name')
            last_name_query = request.args.get('last_name')
            player_request = requests.get(os.getenv('BALLDONTLIE_API_BASEURL')  + f'/players?first_name={first_name_query}&last_name={last_name_query}', headers={'Authorization': os.getenv('BALLDONTLIE_API_KEY')})
            if player_request.status_code == 200:
                return player_request.json()
            else:
                return jsonify({'Error'})
        except Exception as e:
            return jsonify({'Error': str(e)}), 500
