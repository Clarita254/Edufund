import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topnav from "./components/topnav";
import SignUp from "./pages/SignupPage";
import SignIn from "./pages/SignInPage";


function App(){

return(
<Router>
  <Topnav />
  <Routes>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />
  </Routes>
</Router>

);
}

export default App;