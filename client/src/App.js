import React from "react";
import Router from "./routes";
import NavBar from "./Components/Common/Navbar";
import NavBar2 from "./Components/Common/Navbar2";
import NavBar3 from "./Components/Common/Navbar3";

function App() {
  return (
    <div className="App">
      <NavBar3 />
      <NavBar2 />
      <NavBar />

      <div className="ContainerRoutes">
        <Router />
      </div>
    </div>
  );
}

export default App;
