import { Team } from "./Team";

export interface GameParams {
    page?: number;
    per_page?: number;
    dates?: string[];
    seasons?: number[];
    team_ids?: number[];
    postseason?: boolean;
    start_date?: string;
    end_date?: string;
}

export interface Game {
    id: number;
    date: string;
    home_team_score: number;
    visitor_team_score: number;
    season: number;
    period: number;
    status: string;
    time: string;
    postseason: boolean;
    home_team: Team;
    visitor_team: Team;
}