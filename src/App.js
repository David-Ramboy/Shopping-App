import React from "react";
import {useState} from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import {Routes, Route} from "react-router-dom";
import Navbar from "./NavBar";
import Login from "./Components/Login/Login"

function App(){
  const [loginData, setLoginData] = useState({
    username: "david bryan",
    password: "ramboy"
  })
  const [info, setInfo] = useState({
        username: "",
        password: ""
    })
  const loginFunc = (logInfo)=>{
    setInfo(prev => {
      return{
        username : logInfo.username,
        password : logInfo.password
      }
    })
  }

  return(
    <div>
      
      {
        (loginData.username !== info.username && loginData.password !== info.username) ? 
        <Login loginFunc={loginFunc} /> :
        <About/>
      }

      {
      //   loginData.isLogin &&<Routes>
      //   <Route path="/" element={<Home/>} />
      //   <Route path="/about" element={<About/>} />
      //   <Route path="/projects" element={<Projects/>} />
      //   <Route path="/contact" element={<Contact/>} />
      // </Routes> 
      }
      
    </div>
  )
}

export default App;