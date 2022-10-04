import React from "react";
import {useState} from "react"

function Login(props){
    
    
  
    const [dataComponent, setDataComponent] = useState({
        username: "",
        password: "",
    })


    function handleChange(event){
        const {value,name} = event.target;
        setDataComponent(prev => {
            return {...prev,
            [name]:value
            }
        })

    }

    function handleSubmit(event){
        event.preventDefault();
        
        
        props.loginFunc(dataComponent)

    }

    return(
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" name="username" onChange={handleChange} value={dataComponent.username} />
                <input type="text" placeholder="Password" name="password" onChange={handleChange} value={dataComponent.password}/>
                <button>Login</button>
                <a href="#">Forgot</a>
            </form>
        </div>
    )
}

export default Login;