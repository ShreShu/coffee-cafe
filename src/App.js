import React from "react";
import { Fade } from "react-awesome-reveal";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./screen/Footer";
import Header from "./screen/Header";
import HomeScreen from "./screen/HomeScreen";
import SignIn from "./screen/SignIn";
import SignUp from "./screen/SignUp";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route extact path="/" element={<HomeScreen />} />

        <Route
          path="/signin"
          element={
            <Fade>
              <SignIn />
            </Fade>
          }
        />
        <Route
          path="/signup"
          element={
            <Fade>
              <SignUp />
            </Fade>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
