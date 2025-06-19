import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignupPage";
import SignInPage from "./pages/SignInPage";
import DonationHistory from "./pages/DonationHistory";

import Topnav from "./components/topnav";

function App(){

return(
<Router>
 <Topnav/>
  <Routes>
    
    <Route path="/signup" element={<SignUp />} />
    <Route path="/donation-history" element={<DonationHistory />} />
    <Route path="/signin" element={<SignInPage/>} />
    

  </Routes>
</Router>

);
}

export default App;
