import { BASE_API } from "../config";

export function fetchData(url: string) {
  return fetch(`${BASE_API}/${url}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => console.error(e));
}

export function fetchDataById(url: string, id: string | undefined) {
  return fetch(`${BASE_API}/${url}/${id}`)
  .then((res) => res.json())
  .then((data) => {
    return data;
  })
  .catch((e) => console.error(e));
}
