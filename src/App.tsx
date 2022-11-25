import { Routes, Route } from "react-router-dom";
import Dashboard from "./component/Teams";
import TeamDetails from "./component/Teams/TeamDetails";
import UserDeatils from "./component/Users/UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/team/:id" element={<TeamDetails />}></Route>
      <Route path="/user/:id" element={<UserDeatils />}></Route>
    </Routes>
  );
}

export default App;
