import { Team } from "./Team";
import { BdlPlayer } from "./Player";
import { Game } from "./Game";

export interface PlayerStats {
    ast: number;
    blk: number;
    dreb: number;
    fg3_pct: number;
    fg3a: number;
    fg3m: number;
    fg_pct: number;
    fga: number;
    fgm: number;
    ft_pct: number;
    fta: number;
    ftm: number;
    game: Game;
    id: number;
    min: string;
    oreb: number;
    pf: number;
    player: BdlPlayer;
    pts: number;
    reb: number;
    stl: number;
    team: Team;
    turnover: number;
}