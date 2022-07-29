import React from "react";
import { Fade } from "react-awesome-reveal";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./screen/Footer";
import Header from "./screen/Header";
import HomeScreen from "./screen/HomeScreen";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route extact path="/" element={<HomeScreen />} />

        <Route
          path="/home"
          element={
            <Fade>
              <div>hello</div>
            </Fade>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
