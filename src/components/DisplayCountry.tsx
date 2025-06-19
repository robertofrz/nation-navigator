import type { Country } from "../types/countryType";
import Table from "./Table";

type Props = {
  shownCountries: Country[];
};

function DisplayCountry({ shownCountries }: Props) {
  if (shownCountries.length !== 1) return null;

  const country = shownCountries[0];

  return (
    <div className="w-[90vw] sm:w-100 border-2 border-white/20  rounded-xl bg-[#1f2b3e] shadow-xl shadow-[#0d1522]">
      <div className="relative border-b-2 border-white/20">
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className="w-[900px] h-[200px] object-cover object-center rounded-t-xl"
        />
        <div className="bg-[#1f2b3e] w-[75%] px-2 py-2 rounded-t-xl absolute -bottom-0.5 left-1/2 -translate-x-1/2 border-t-2 border-r-2 border-l-2 border-white/20">
          <h2 className="text-lg font-bold">
            {country.name.common.toUpperCase()}
          </h2>
        </div>
      </div>

      <Table country={country} />
    </div>
  );
}

export default DisplayCountry;
