import { TEAMS_API } from "../config";

export function getTeamsData(): any {
  return fetch(TEAMS_API)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => console.error(e));
}
export const fetchTeamDetail = async (id: string | undefined) => {
  let result = {};
  await fetch(
    `https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/${id}`
  )
    .then((res) => res.json())
    .then((json) => {
      result = json;
    })
    .catch((e) => {
      console.log("Error occur : " + e);
    });
  // console.log(result);

  return result;
};
