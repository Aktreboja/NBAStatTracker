import type { Team } from "./Team";

interface PlayerResponse {
    data: BdlPlayer[];
    meta: {
      per_page: number;
    };
  }

export interface BdlPlayer {
    college: string;
    country: string;
    draft_number: number;
    draft_round: number;
    draft_year: number;
    first_name: string;
    height: string;
    id: number;
    jersey_number: string;
    last_name: string;
    position: string;
    team: Team;
    weight: string;
}


export interface NbaPlayer {
    first_name: string;
    full_name: string;
    id: number;
    is_active: boolean;
    last_name: string;
}

export interface NbaRosterPlayer {
  experience: string;
  height: string;
  jersey_number: string;
  player_id: number;
  player_name: string;
  position: string;
  school: string;
  season: string;
  team_id: number;
  weight: string;
}

export interface FeaturedPlayerProps {
  data: BdlPlayer;
  nbaData: NbaPlayer;
  chartData: ChartDataProps
}