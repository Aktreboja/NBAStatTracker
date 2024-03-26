from flask import jsonify
import os
import requests

def make_bdl_api_request(endpoint: str, params=None):
    """
    Make a request to the BallDontLieAPI with common headers and base URL.

    Parameters:
    - endpoint (str): The API endpoint to request.
    - params (dict): Optional parameters for the request.

    Returns:
    - JSON object: Response from the BallDontLieAPI.
    """
    # todo : Find a fix for deployment issues with headers
    headers = {'Authorization': '1f0994ae-5c9f-4eee-b826-e4780b58fa16'}
    base_url = os.getenv('BALLDONTLIE_API_BASEURL')
    url = f'{base_url}{endpoint}'
    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()  # Raises HTTPError for bad response status codes
        if response.status_code == 200:
            return response.json()
        else:
             return response.text()
    except requests.exceptions.RequestException as err:
        # Handle connection errors, timeouts, etc.
        return jsonify({'message': str(err)}), 500