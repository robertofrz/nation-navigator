import type { Country } from "../types/countryType";

type AutosuggestProps = {
  countries: Country[];
  handleShow: (country: Country) => void;
};

function Autosuggest({ countries, handleShow }: AutosuggestProps) {
  return (
    <>
      {countries.length > 10 && (
        <p className="text-white/50">
          Too many matches, be more specific with the search term.
        </p>
      )}

      {countries.length <= 10 && countries.length > 1 && (
        <ul className="-mt-1 rounded-b-lg py-2 bg-[#1f2b3e]">
          {countries.map((country) => (
            <li
              key={country.name.common}
              onClick={() => handleShow(country)}
              className="bg-[#1f2b3e] p-2 flex justify-between hover:bg-[#FFC107]/90 cursor-pointer"
            >
              {country.name.common}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Autosuggest;
