from flask import Blueprint, request, jsonify
import os
import requests
from Routes.BallDontLie.wrapper import make_bdl_api_request

bdl_teams = Blueprint('bdl_teams', __name__, url_prefix='/teams')

@bdl_teams.route('/', methods = ['GET'])
def get_all_teams():
    '''
    Get All Teams from BallDontLie API
    Returns an array of team objects, or 404 if team is not found:
        - Sample API Call (/teams/1)
        {
            "data": [
                {
                "id":1,
                "conference":"East",
                "division":"Southeast",
                "city":"Atlanta",
                "name":"Hawks",
                "full_name":"Atlanta Hawks",
                "abbreviation":"ATL"
                },
                {
                    "abbreviation": "BOS",
                    "city": "Boston",
                    "conference": "East",
                    "division": "Atlantic",
                    "full_name": "Boston Celtics",
                    "id": 2,
                    "name": "Celtics"
                },
                .....
            ]
        }
    '''
    if request.method == 'GET': 
        try:
            response = make_bdl_api_request('/teams')
            if 'data' in response:
                return response['data']
            else:
                return jsonify({'status': 409, 'message': 'Unable to find data.'})
        except requests.exceptions.HTTPError as err:
            return jsonify({f'Error: {err}'}), 500
        

@bdl_teams.route('/<team_id>', methods = ['GET'])
def get_specific_team(team_id: int):
    '''
        Search for a specific team from BallDontLie API
        Returns an object containing the Team, or 404 if team is not found:
            - Sample API Call (/teams/1)
            {
                "data": 
                    {
                    "id":1,
                    "conference":"East",
                    "division":"Southeast",
                    "city":"Atlanta",
                    "name":"Hawks",
                    "full_name":"Atlanta Hawks",
                    "abbreviation":"ATL"
                    },
                
            }
    '''
    if request.method == 'GET':
        try:
            response = make_bdl_api_request(f'/teams/{team_id}')
            if 'data' in response:
                return jsonify(response['data'])
            else:
                return jsonify({'status': 409,'message': 'Data not found'})
        except requests.exceptions.HTTPError as err:
            # Handle HTTP errors returned from the API request
            return jsonify({'status': 500, 'message': str(err)})
        except Exception as e:
            # Handle any other unexpected errors
            return jsonify({'status': 500, 'message': str(e)})