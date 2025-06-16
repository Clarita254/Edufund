import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignupPage";
import {Navigate} from "react-router-dom";


function App(){

return(
<Router>
 
  <Routes>
    <Route path="/" element={<Navigate to="/signup" />} />
    <Route path="/signup" element={<SignUp />} />
    
  </Routes>
</Router>

);
}

export default App;
