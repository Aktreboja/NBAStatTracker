import { ResponseError } from "@/Types";
import { Team } from "@/Types/Team";
import { make_bdl_api_request } from "./wrapper";

// Retrieves a specific NBA team
export const getNbaTeam = async (
  teamId: number,
): Promise<Team | ResponseError> => {
  try {
    let response = await fetch(
      process.env.NEXT_PUBLIC_BASEURL + `/api/bdl/teams/${teamId}`,
    );
    if (!response.ok) return (await response.json()) as ResponseError;
    return (await response.json()) as Team;
  } catch (error) {
    throw new Error(
      `Error with retrieving specific Team: ${(error as Error).message}`,
    );
  }
};

// Retrieve all NBA teams from the API.
export const retrieveAllNbaTeams = async (): Promise<Team[]> => {
  try {
    const response: Team[] = await make_bdl_api_request("/teams/all");
    const teams = await response;
    return teams;
  } catch (error) {
    console.error("Error retrieving NBA teams:", error);
    return [];
  }
};

export const retrieveTeamPlayers = async (teamId: number) => {
  try {
    const response = await make_bdl_api_request(`/teams/${teamId}/players`);
    return response;
  } catch (error) {
    return [];
  }
};
