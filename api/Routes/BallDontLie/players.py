from flask import Blueprint, request, jsonify
from Routes.BallDontLie.wrapper import make_bdl_api_request
from flask_cors import cross_origin

bdl_players = Blueprint('bdl_players', __name__, url_prefix='/players')

@bdl_players.route('/<player_id>', methods = ['GET'])
@cross_origin()
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
            params = { 'player_ids[]': player_id }
            response = make_bdl_api_request('/players', params = params)
            if 'data' in response:
                return response['data']
            else:
                return jsonify({ 'status': 409, 'message': 'Unable to retrieve player data'}), 409
        except Exception as e:
            return jsonify({'Error': str(e)}), 500
        

@bdl_players.route('/search', methods = ['GET'])
@cross_origin()
def search_player():
    """
    Search for a player by full name

    Parameters:
    - first_name: The NBA player's first name
    - last_name: The NBA player's last name

    Returns:
    - Object containing the search results for the NBA player

    """
    if request.method == 'GET':
        try:
            # Request Query Parameters
            first_name = request.args.get('first_name')
            last_name = request.args.get('last_name')
            if first_name is None:
                return jsonify({'message': 'Missing required query parameter: first_name'}), 409
            elif last_name is None:
                return jsonify({'message': 'Missing required query parameter: last_name'}), 409
            params = { 'first_name': first_name, 'last_name': last_name}
            response = make_bdl_api_request('/players', params=params)
            if 'data' in response:
                return response['data']
            return jsonify({ 'status': 409, 'message': 'Unable to find player'}), 409
        except Exception as e:
            return jsonify({'Error': str(e)}), 500
        


