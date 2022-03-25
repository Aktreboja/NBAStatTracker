// 3/24: Rest day


/**
 * Nba Player Types.
 */

interface playerTeam {
    id: number,
    abbreviation: string,
    city: string,
    conference: string,
    division: string,
    full_name: string,
    name: string
}

/* Player Meta from BallDontLie.API */
export interface PlayerMeta {
    id: number,
    first_name: string,
    height_feet: number,
    height_inches: number,
    last_name: string,
    position: string,
    team: playerTeam,
    weight_pounds: number
}


export interface playerAverages {
    games_played: number,
    player_id: number,
    season: number,
    min: string,
    fgm: number,
    fga: number,
    fg3m: number,
    fg3a: number,
    ftm: number,
    fta: number,
    oreb: number,
    dreb: number,
    reb: number,
    ast: number,
    stl: number,
    blk: number,
    turnover: number,
    pf: number,
    pts: number,
    fg_pct: number,
    fg3_pct: number,
    ft_pct: number
}



interface Draft {
    teamId: string,
    pickNum: string,
    roundNum: string,
    seasonYear: string
}

/* Player Meta data from NBA CDN */
export interface NbaPlayerMeta {
    playerID: string,
    teamId: string,
    jersey: string,
    heightFeet: string,
    heightInches: string,
    weightPounds: string,
    draft: Draft,
    nbaDebutYear: string,
    collegeName: string,
    position: string
}



export interface PlayerCardProps {
    playerID: string,
    teamId: string,
    heightFeet: string,
    heightInches: string,
    weightPounds: string,
    draft: Draft,
    nbaDebutYear: string,
    jersey: string,
    first_name: string,
    last_name: string,
    position: string
}



/* Player Search Card */

export interface PlayerSearchCard {
    
}