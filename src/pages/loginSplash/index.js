import {useState, useEffect} from "react";
import "./splash.scss";
import Auth from '../../components/auth/auth';

//import Signup from "../../components/auth/signup";
import Eat from "../../assets/clip.png";



function Splash () {

const [sessionToken, setSessionToken] = useState('');

useEffect(() =>{
  if(localStorage.getItem('token')) {
    setSessionToken(localStorage.getItem('token'));

  }
}, [])

const updateToken = (newToken) => {
 localStorage.setItem('token', newToken);
 setSessionToken(newToken);
 console.log(sessionToken);
}

  return (
  <div className="Results">
   
<Auth updateToken={updateToken}/>
     {/* <Nav clickLogout={clearToken}/>  */}
    


    
  </div>
  );
}

export default Splash;