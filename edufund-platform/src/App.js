import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignupPage";

import Topnav from "./components/topnav";
import {Navigate} from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";


function App(){

return(
<Router>
 <Topnav/>
  <Routes>
    <Route path="/" element={<Navigate to="/signup" />} />
    <Route path="/signup" element={<SignUp />} />
     <Route path="/Leaderboard" element={<Leaderboard />} />
    
    
    

  </Routes>
</Router>

);
}

export default App;
