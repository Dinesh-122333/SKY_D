// main.tsx
import Frontpage from "./Frontpage"
// import 'popper.js/dist/popper.min.js';
// import React;
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Login1";
import Adminlogin from "./Adminlogin";
import Claimnow from "./Claimnow";
import Continue from "./Continue";


export default function App(){
  return(
        <div>
          <Router>
              <Routes>
                <Route path='/'element={<Frontpage/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/adminlogin' element={<Adminlogin/>}/>
                <Route path='/proceed' element={<Claimnow/>}/>
                <Route path="/continue" element={<Continue/>}/>
              </Routes>
            </Router>
          
        </div>
      )
}


