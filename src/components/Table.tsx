import Weather from "./Weather";
import type { Country } from "../types/countryType";

type Props = {
  country: Country;
};

function Table({ country }: Props) {
  const rowClass = "border-b border-white/20";
  const titleCell = "text-[#FFC107] font-bold text-left px-4 py-3 text-lg";
  const valueCell = "text-right px-4 py-3";

  return (
    <table className="table-auto border-collapse w-full">
      <tbody>
        <tr className={rowClass}>
          <td className={titleCell}>Capital</td>
          <td className={valueCell}>{country.capital}</td>
        </tr>
        <tr className={rowClass}>
          <td className={titleCell}>Weather</td>
          <Weather capital={country.capital[0]} />
        </tr>
        <tr className={rowClass}>
          <td className={titleCell}>Continent</td>
          <td className={valueCell}>{country.continents.join(", ")}</td>
        </tr>
        <tr className={rowClass}>
          <td className={titleCell}>Area</td>
          <td className={valueCell}>{country.area} km²</td>
        </tr>
        <tr className={rowClass}>
          <td className={titleCell}>Population</td>
          <td className={valueCell}>{country.population}</td>
        </tr>
        <tr>
          <td className={titleCell}>Languages</td>
          <td className={valueCell}>
            {country.languages && Object.values(country.languages).join(", ")}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
