import { Player } from "./Player";
import { Team } from "./Team";

export interface Meta {
  total_pages: number;
  current_page: number;
  next_page: number;
  per_page: number;
  total_count: number;
}

export interface ResponseMeta {
  data: Player[] | Team[];
  meta: Meta;
}

export interface ResponseError {
  Status: number;
  message: string;
}
