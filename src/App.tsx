import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import TeamDetail from "./component/TeamDetail";
import UserProfile from "./component/UserProfile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/team/:id" element={<TeamDetail />}></Route>
      <Route path="/user/:id" element={<UserProfile />}></Route>
    </Routes>
  );
}

export default App;
