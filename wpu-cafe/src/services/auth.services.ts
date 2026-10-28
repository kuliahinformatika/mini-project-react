import {fetchAPI} from "../utils/fetch";

export const login = async (payload: object) => {
  const result = await fetchAPI("/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return result;
}