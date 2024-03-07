import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import "tailwindcss/tailwind.css";
import TopButtons from "./Components/TopButtons";
import Inputs from "./Components/Inputs";

function App() {
  return (
    <div
      className="mx-auto max-w-screen-md mt-4 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 
    h-fit shadow-xl shadow-gray-400 pt-6 pb-6"
    >
      <TopButtons />
      <Inputs />
    </div>
  );
}

export default App;
