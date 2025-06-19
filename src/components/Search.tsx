import { useState, useEffect } from "react";
import type { Country } from "../types/countryType";
import Autosuggest from "./Autosuggest";

type SearchProps = {
  data: Country[];
  shownCountries: Country[];
  setShownCountries: React.Dispatch<React.SetStateAction<Country[]>>;
};

function Search({ setShownCountries, shownCountries, data }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (!isLocked) {
      if (searchTerm) {
        const filtered = data.filter((country) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setShownCountries(filtered);
      } else {
        setShownCountries([]);
      }
    }
  }, [searchTerm, data, isLocked, setShownCountries]);

  const handleShow = (country: Country) => {
    setShownCountries([country]);
    setSearchTerm("");
    setIsLocked(true);
  };

  return (
    <div>
      <input
        placeholder="Search for countries"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsLocked(false);
        }}
        className={`mt-4 mb-2 bg-[#1f2b3e] text-white/30 w-[90vw] sm:w-100 px-3 py-3 rounded-lg focus:outline-none ${
          shownCountries.length <= 10 && shownCountries.length > 1
            ? "border-b border-white/20 rounded-b-none"
            : ""
        }`}
      />
      <Autosuggest countries={shownCountries} handleShow={handleShow} />
    </div>
  );
}

export default Search;
