import { BdlPlayer, NbaPlayer } from "@/Types/Player";
import { getPlayerByFullName } from "./API/BDL/Player";
import { getNbaPlayer } from "./API/NBA/player";

export interface PlayerInfo {
  bdlData: BdlPlayer;
  nbaData: NbaPlayer;
}

/**
 *
 * @description Takes today's date and calculates 2 weeks prior
 * @returns {string} Date from 2 weeks in the format (YYYY-MM-DD)
 */
export const calculateDaysBefore = (days: number) => {
  // Get today's date
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let dayDifferential = day - days;

  // Check if the date is past the previous
  if (dayDifferential < 0) {
    // Set to the new month
    let alteredDate = new Date(today.setDate(today.getDate() - days));
    year = alteredDate.getFullYear();
    month = alteredDate.getMonth() + 1;
    day = alteredDate.getDate();
    return `${year}-${month > 10 ? month : `0${month}`}-${day > 10 ? day : `0${day}`}`;
  } else
    return `${year}-${month > 10 ? month : `0${month}`}-${dayDifferential >= 10 ? dayDifferential : `0${dayDifferential}`}`;
};

export const todaysDate = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  return `${year}-${month > 10 ? month : `0${month}`}-${day >= 10 ? day : `0${day}`}`;
};

export const retrievePlayerInformation = async (
  firstName: string,
  lastName: string,
): Promise<PlayerInfo | Object> => {
  const bdlResponse: BdlPlayer[] = await getPlayerByFullName(
    firstName,
    lastName,
  );
  const nbaResponse: NbaPlayer[] = await getNbaPlayer(firstName, lastName);

  if (bdlResponse.length > 0 && nbaResponse.length > 0) {
    const object = {
      bdlData: bdlResponse[0],
      nbaData: nbaResponse[0],
    };
    return object;
  } else {
    return { message: "Unable to retrieve nba information" };
  }
};
