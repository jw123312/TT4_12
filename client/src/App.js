import React from "react";
import LoginScreen from "./screens/LoginScreen";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import RegisterScreen from "./screens/RegisterScreen";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          {/* <Route
            path="/"
            element={
              <PrivateRoute>
                <HomeScreen />
              </PrivateRoute>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
