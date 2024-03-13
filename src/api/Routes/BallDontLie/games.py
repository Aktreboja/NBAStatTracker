from flask import Blueprint, request, jsonify
import os
import requests

bdl_games = Blueprint('bdl_games', __name__, url_prefix='/games')


@bdl_games.route('/previous_games', methods = ['GET'])
def get_previous_games():
    if request.method == 'GET':
        try:
            date = request.args.get('start_date')
            if date is None:
                return jsonify({'status': 409, 'message': 'Missing Required Query Parameter: "start_date"'})
        except requests.exceptions.HTTPError as err:
            return 