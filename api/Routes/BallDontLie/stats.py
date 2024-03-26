from flask import Blueprint, request, jsonify
import requests
from Routes.BallDontLie.wrapper import make_bdl_api_request
from flask_cors import cross_origin

bdl_stats = Blueprint('bdl_stats', __name__, url_prefix='/stats')

@bdl_stats.route('/player/previous_games', methods = ['GET'])
@cross_origin()
def get_previous_player_stats():
    """
    Retrieve the players stats from previous games
    @param {player_id} the player_id
    @param {start_date} The date to return games on or after that date.
    @return {Game[]} an array of Stat objects.
    """
    if request.method =='GET':
        try:
            # Retrieve query Parameters
            player_id = request.args.get('player_id')
            start_date = request.args.get('start_date')
            if player_id is None:
                return jsonify({'message': 'player_id is missing!'}), 409
            elif start_date is None:
                return jsonify({'message': 'start_date is missing!'}), 409
            else:
                params = { 'player_ids[]': player_id, 'start_date': start_date }
            response = make_bdl_api_request('/stats', params=params)
            if 'data' in response:
                return response['data']
            else:
                return jsonify({'message': 'Error retrieving stats'}), 409
        except requests.exceptions.HTTPError as err:
            return jsonify({'message': str(err)}), 500