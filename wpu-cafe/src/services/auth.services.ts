import { environment } from "../constants/environment";
import {fetchAPI} from "../utils/fetch";

interface

export const login = async (payload: object) => {
  const result = await fetchAPI(`${environment.API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(payload);
  })
  return result;
}