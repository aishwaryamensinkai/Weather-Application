import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "New York" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setTimeout(() => {
          toast.success(
            `Successfully fetched weather for ${data.name}, ${data.country}.`
          );
        }, 2000); // 2000 milliseconds delay

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`mx-auto max-w-screen-md mt-4 py-5 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-br rounded-3xl shadow-xl shadow-gray-400 ${formatBackground()}`}
      >
        <TopButtons setQuery={setQuery} />
        <Inputs
          setQuery={setQuery}
          units={units}
          setUnits={setUnits}
          inputSize="sm"
          fontSize="sm"
          rounded="md"
        />

        {weather && (
          <div className="mt-8">
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />
          </div>
        )}

        <ToastContainer autoClose={2000} theme="colored" newestOnTop={false} />
      </div>
    </div>
  );
}

export default App;
