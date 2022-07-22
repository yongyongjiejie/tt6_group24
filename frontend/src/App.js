import React from "react";
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import companyLogo from './images/dbs_logo.png';
import loginbg from './images/login_bg.jpg';
import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [apiResponse, setApiResponse] = React.useState("");

  function callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => setApiResponse(res));
  }

  React.useEffect(() => {
    callAPI()
  }, []);

  return (
    <div className="Container">
      <div className="main"  style={{ 
      "backgroundImage": `url(${loginbg})`,
      "background-position": "center",
      "background-repeat": "no-repeat",
      "background-size": "cover"
    }}>
          
        <img id="companyLogo" src={companyLogo} alt="BigCo Inc. logo"/>
        <h2 className="main-header" style={{ 
      "color": "black"}}>DBS SEED Team 24 Login</h2>
        <nav> 
          <div className="login-box">
            <Login/>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
