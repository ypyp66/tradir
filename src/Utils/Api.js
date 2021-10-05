import axios from "axios";

export const getBeerLists = async () => {
  try {
    const result = await axios.get("https://api.punkapi.com/v2/beers");

    return result;
  } catch (e) {
    return e;
  }
};
