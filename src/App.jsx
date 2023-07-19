import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/pages/Header";
import HomePage from "./components/pages/HomePage";
import Destination from "./components/pages/Destination";
import Crew from "./components/pages/Crew";
import Technology from "./components/pages/Technology";
import { destinations } from "./data.json";
import { crew } from "./data.json";
import { technology } from "./data.json";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <>
            <Route path="/" exact element={<HomePage />} />
            <Route
              path="/destination"
              element={<Destination destination={destinations} />}
            />
            <Route path="/crew" element={<Crew crew={crew} />} />
            <Route
              path="/technology"
              element={<Technology technology={technology} />}
            />
          </>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
