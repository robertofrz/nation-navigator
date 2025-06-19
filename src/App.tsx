import fetchCountries from "./api/fetchCountries";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Search from "./components/Search";
import type { Country } from "./types/countryType";
import DisplayCountry from "./components/DisplayCountry";
import Skeleton from "./components/Skeleton";

function App() {
  const [shownCountries, setShownCountries] = useState<Country[]>([]);

  const { data, isLoading, error } = useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  if (isLoading) return <Skeleton />;

  return (
    <div className="w-[90vw] sm:w-100 flex flex-col items-center justify-center gap-4 text-center my-4">
      <div className="flex flex-col items-center justify-center gap-2 mt-4">
        <h1 className="text-4xl sm:text-5xl mb-2">
          <strong className="text-[#FFC107]">N</strong>ation{" "}
          <strong className="text-[#FFC107]">N</strong>avigator
        </h1>
        <p className="text-lg sm:text-xl opacity-70">
          Explore the world, one country at a time
        </p>

        {error && (
          <p className="text-red-400 mt-2 text-2xl">
            An error occurred while loading countries.
          </p>
        )}
        {!data && !error && (
          <p className="text-[#FFC107] mt-2 text-2xl">
            No country data available at the moment.
          </p>
        )}

        {data && (
          <Search
            data={data}
            shownCountries={shownCountries}
            setShownCountries={setShownCountries}
          />
        )}
      </div>

      <DisplayCountry shownCountries={shownCountries} />
    </div>
  );
}

export default App;
