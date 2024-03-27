<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT LOGO -->
<br />
<div align="center">
<!--   <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">Nba Stat Tracker</h3>

  <p align="center">
    A Next.js Web Application centered on simplifying NBA data analysis.
<!--     <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

NBA Stat Tracker is a seamless Next.js web application that provides basic analytical information about anything NBA related.

Some current features include:
    1. Navigate across various teams in the NBA.
    2. Be able to view the roster of each team, showcasing player specific metadata such as experience, position and player number
    3. View recent player specific stats from the last couple of weeks (points, assists, blocks, rebounds, etc.).
    4. View a player's upcoming games.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![MUI][MaterialUI]][MaterialUI-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Flask][Flask]][Flask-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g

  # pnpm
  npm install pnpm -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://www.balldontlie.com](https://www.balldontlie.com)
2. Clone the repo
   ```sh
   git clone https://github.com/Aktreboja/NBAStatTracker.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Set up virtualenv for Flask api:
    ```sh
    python -m venv .venv

    # Windows
    \.venv\Scripts\activate

    # MacOS
    source .venv/bin/activate
    ```
5. Enter your API in `.env`
   ```env
   BALLDONTLIE_API_KEY = "API_KEY_HERE"
   BALLDONTLIE_API_BASEURL = "https://api.balldontlie.io/v1"
   NEXT_PUBLIC_BASEURL = http://127.0.0.1:5328
   ```

6. Run the application (or specific portions of it
    ```sh
    # Runs the full application
    pnpm run dev

    # Runs the flask api server
    pnpm run flask-dev

    # Runs the nextjs app
    pnpm run next-dev
    ```
   

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Add Search bar functionality
- [ ] Add Loading components for initial rendering of pages
- [ ] Create Demo videos / documentaion
- [ ] Convert from REST to GraphQL api.
- [ ] Experimental Roadmap Features
    - [ ] Troubleshoot 401 errors within Vercel Deployment (Server components)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Aldrich Reboja - aktreboja@gmail.com

Project Link: [https://github.com/aktreboja/NBAStatTracker](https://github.com/aktreboja/NBAStatTracker)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/aktreboja
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Flask]: https://img.shields.io/badge/Flask-007ACC?style=for-the-badge&logo=flask&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/en/3.0.x/
[MaterialUI]: https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white
[MaterialUI-url]: https://mui.com/material-ui/
