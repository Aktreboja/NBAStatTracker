# StatsCentral


## Author: Aldrich Reboja


### Description

    - Stats central is a web application that utilizes several api endpoints, including ** BalldontLie ** and the ** NBA CDN **
    - Through the application an user will be able to
        - View a specific player's stats
        - View the upcoming schedule of a player.
        - View some historic details about the player (draft pick, college, etc.)


### Routes

    - /
        1. Index page  
    - /players/(playerFirstName_playerLastName)
        1. Search a basketball player by typing their full name, with an underscore in between the first and last names (ex: Lebron_James)


### API Guide

    1. Retrieving basic information from the original API (Balldontlie)
        - API call ( https://www.balldontlie.io/api/v1/players?search={ player Name })
            - 'search' query will allow you to be able to find a specific player.
        - Not using the search query will return a complete list of players, separated by pages which can be utilized later as a form of pagination within the app.
        - Example call on 'Lebron James' will return 

        ```
        {
                "data": [
                {
                    "id": 237,
                    "first_name": "LeBron",
                    "height_feet": 6,
                    "height_inches": 8,
                    "last_name": "James",
                    "position": "F",
                    "team": {
                        "id": 14,
                        "abbreviation": "LAL",
                        "city": "Los Angeles",
                        "conference": "West",
                        "division": "Pacific",
                        "full_name": "Los Angeles Lakers",
                        "name": "Lakers"
                    },
                    "weight_pounds": 250
                }
            ],
            "meta": {
                "total_pages": 1,
                "current_page": 1,
                "next_page": null,
                "per_page": 25,
                "total_count": 1
            }
        }
        ```


    2. Combining the balldontlie with the NBA CDN

    - Although we attain a decent amount of information from the BallDontLie API, we miss out on a decent amount of crucial information; some that help make the application feel more live rather than just plain numbers. 
    - The advantages of referencing the CDN in this project

        1. Retrieving the Player's image and Team Logo.
        2. Retrieving meta data on the player (draft pick, college(optional), associated teams, etc.)

    - To retrieve the NBA CDN call the following:
        1. http://data.nba.net/data/10s/prod/v1/(season)/players.json
        2. (Season) Being the current season (to calculate the season go back 1 year from the current year).
        3. Returns a JSON file containing all of the NBA players on file for this season.
        4. To retrieve the specific player you simply do a search on the Object's values and and isolate the specific player you need.
    
    3. Retrieving the NBA picture and Team Logo.

    - To be able to retrieve the current NBA headshots and their respective team logos, you will need the following API links.

        1. https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/(Number).png
            -   The 'Number' at the end is the player ID where we find from the information attained from the NBA CDN API
            -   By utilizing this link with the correct number we will be able to find any player's headshot, assuming that the data is complete and an image exists (A current issue for players that are registered within JSON file but are not currently playing in the NBA ** usually overseas playing at a different league or maybe a free agent **)
        2. https://cdn.nba.com/logos/nba/(TeamID)/primary/L/logo.svg
            - The team 'TeamID' being the id of the team that the player currently plays for, also retrieved from the NBA CDN API link
            - This link so far seems pretty stable in terms of consistently generating an image, however testing and error handling needs to be implemented to ensure everything goes smoothly in case such a situation were to occur.


### Current issues / bugs to fix
    - [ ] Player search sometimes returns incomplete info on the player


### Upcoming Features

    - [ ] Compare page to be able to compare players based on their season averages.

#### Languages / Frameworks used

    - Frontend
        1. React
        2. React-Bootstrap

    - Backend
        1. Node.js
        2. Next.js
