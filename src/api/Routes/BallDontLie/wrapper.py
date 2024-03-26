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
    headers = {'Authorization': os.getenv('BALLDONTLIE_API_KEY')}
    base_url = os.getenv('BALLDONTLIE_API_BASEURL')
    url = f'{base_url}{endpoint}'
    print(headers)
    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()  # Raises HTTPError for bad response status codes
        return response.json()
    except requests.exceptions.RequestException as err:
        # Handle connection errors, timeouts, etc.
        return jsonify({'message': str(err)}), 500