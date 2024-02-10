import React from "react";
import CVEManagement from "./Components/CVEManagement";
import data from "./utils/data";

const App = () => {
  return <CVEManagement data={data} />;
};

export default App;
