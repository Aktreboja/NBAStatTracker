import { BdlPlayer } from "@/Types/Player";
import { make_bdl_api_request } from "./wrapper";

export const getPlayerByFullName = async (
  firstName: string,
  lastName: string,
): Promise<BdlPlayer[]> => {
  try {
    const query = { first_name: firstName, last_name: lastName };
    const response = await make_bdl_api_request("/players/search", query);
    return await response;
  } catch (error) {
    throw new Error(
      `Error fetching player by full name: ${(error as Error).message}`,
    );
  }
};
