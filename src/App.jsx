import { useState } from "react";
import Navbar from "./Components/Navbar";
import Quiz from "./Components/Quiz";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const App = () => {
  const [mode, setMode] = useState("secondary");
  const toggleMode = () => {
    if (mode === "secondary") {
      setMode("dark");
      document.body.style.backgroundColor = "#016d7e";
      document.body.style.color = "#f1f1f1";
    } else {
      setMode("secondary");
      document.body.style.backgroundColor = "#fafafa";
      document.body.style.color = "#101010";
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Quiz />
    </>
  );
};

export default App;
