import "./App.css";
import "tailwindcss/tailwind.css";
import TopButtons from "./Components/TopButtons";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TemperatureAndDetails from "./Components/TemperatureAndDetails";

function App() {
  return (
    <div
      className="mx-auto max-w-screen-md mt-4 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 
    h-fit shadow-xl shadow-gray-400 pt-6 pb-6"
    >
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
    </div>
  );
}

export default App;
