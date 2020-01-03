import React from "react";
import "./App.css";
import Chart from "./components/Chart";
import Bar from "./components/Bar";
const App: React.FC = () => {
  return (
    <div className="App">
      <Bar />
      <Chart />
    </div>
  );
};

export default App;
