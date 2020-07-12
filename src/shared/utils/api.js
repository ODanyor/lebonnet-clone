import axios from "axios"
import { getStoredAuthToken } from "shared/utils/authToken"

const defaults = {
  baseURL: "https://europe-west2-lebonnet-0000.cloudfunctions.net/api",
  headers: () => ({
    "Content-Type": "application/json",
    Authorization: getStoredAuthToken()
      ? `Bearer ${getStoredAuthToken()}`
      : undefined,
  }),
}

const api = async (method, url, variable) => {
  return await axios({
    method,
    url: `${defaults.baseURL}${url}`,
    data: method !== "get" ? variable : undefined,
    headers: defaults.headers(),
  })
}

export default {
  get: (...args) => api("get", ...args),
  post: (...args) => api("post", ...args),
  delete: (...args) => api("delete", ...args),
  update: (...args) => api("update", ...args),
}
