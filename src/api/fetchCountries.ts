import axios from "axios";

async function fecthCountries() {
  const url = "https://studies.cs.helsinki.fi/restcountries/api/all";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(`Error fetching countries.`);
    throw error;
  }
}
export default fecthCountries;
