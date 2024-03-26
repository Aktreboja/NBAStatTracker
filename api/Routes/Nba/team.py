from flask import request, Blueprint, jsonify
from nba_api.stats.static.players import find_players_by_full_name, find_players_by_first_name, find_players_by_last_name
from nba_api.stats.static.teams import find_team_by_abbreviation
from nba_api.stats.endpoints import commonteamroster
import requests
from flask_cors import cross_origin

nba_teams = Blueprint('nba_teams', __name__, url_prefix="/teams")

@nba_teams.route('/roster/<abr>')
@cross_origin()
def get_team_roster(abr: str):
    """
    Retrieves the team roster in a team

    Parameters:

    - abr: The team's abbreviations

    Returns:

    - An array of players associated with the team
    
    """

    try:
        team = find_team_by_abbreviation(abr)
        if team is None:
            return []
        response = commonteamroster.CommonTeamRoster(team_id=team['id'], season=2023)
        roster = response.get_dict()
        datasets = roster['resultSets']
        teamRoster = datasets[0]
        resultDict = []
        for player in teamRoster['rowSet']:
            player_dict = {
                'team_id': player[0],
                'player_name': player[3],
                'player_id': player[14],
                'height': player[8],
                'weight': player[9],
                'experience': player[12],
                'jersey_number': player[6],
                'position': player[7],
                'school': player[13],
                'season': player[1]
            }
            resultDict.append(player_dict)
        return resultDict
    except requests.exceptions.HTTPError as error:
        return jsonify({'message': f'Server Error: {str(error)}'}), 500
    

@nba_teams.route('/<abr>', methods = ['GET'])
@cross_origin()
def get_team_info(abr: str):
    if request.method == 'GET':
        try:
            team = find_team_by_abbreviation(abr)
            if team is not None:
                return team
            return {'message': 'No NBA teams with the inputted abbreviation'}, 409
        except requests.exceptions.HTTPError as error:
            return {'message': 'server Error'}, 500

