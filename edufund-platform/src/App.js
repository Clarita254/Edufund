import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topnav from "./components/topnav";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignupPage";
import {Navigate} from "react-router-dom";

function App(){

return(
<Router>
  <Topnav />
  <Routes>

    <Route path="/" element={<Navigate to="/signin" />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />
  </Routes>
</Router>

);
}

export default App;