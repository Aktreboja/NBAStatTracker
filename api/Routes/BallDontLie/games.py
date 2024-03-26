from flask import Blueprint, request, jsonify
import requests
from Routes.BallDontLie.wrapper import make_bdl_api_request
from flask_cors import cross_origin

bdl_games = Blueprint('bdl_games', __name__, url_prefix='/games')



@bdl_games.route('/<team_id>/upcoming_games', methods = ['GET'])
@cross_origin()
def get_upcoming_games(team_id: int):
    """
        Retrieve a Team's upcoming Games.
        @param {team_id} The Team id to check games
        @param {start_date} The date to start 

    """
    if request.method == 'GET':
        try:
            start_date = request.args.get('start_date')
            if start_date is None:
                return jsonify({'message': 'missing required parameter: start_date'}), 409
            params = {'team_ids[]': team_id, 'start_date': start_date}
            params['per_page'] = 10
            response = make_bdl_api_request('/games', params=params)
            if 'data' in response:
                return response['data']
            return jsonify({'message': response})
        except requests.exceptions.HTTPError as err:
            return jsonify({'message': f'Server Error: {str(err)}'}),500
        