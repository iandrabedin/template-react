import axios from "axios";
import { baseUrl } from "./apiUtils";

const url = `${baseUrl}/todos`;

export const fetchExample = () => {
  return axios
    .get(url)
    .then(resolve)
    .catch(handleError);
};

const resolve = response => {
  return response.data;
};

const handleError = error => {
  throw new Error(`Could not fetch application: ${error}`);
};
