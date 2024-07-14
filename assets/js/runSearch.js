import {
  create,
  insert,
  remove,
  search,
} from "../../node_modules/@orama/orama/dist/index.js";
import { profiles } from "./instantiateDatabase.js";

export const runSearch = async (properties, term, resultsLimit) => {
  return await search(profiles, {
    term: term,
    properties: properties,
    limit: resultsLimit,
  });
};
