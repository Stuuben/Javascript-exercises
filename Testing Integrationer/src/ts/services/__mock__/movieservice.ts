import { IOmdbResponse } from "../../models/IOmdbResponse";

import axios from "axios";
import { IPerson } from "../../models/IPerson";

export default async (): Promise<IPerson[]> => {
  let response = await axios.get("./../movieservice.ts");
  return response.data;
};
