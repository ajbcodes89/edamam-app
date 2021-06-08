import Signup from "../../components/auth/signup";
import Login from "../../components/auth/login";
import {Tab,Tabs} from  'react-bootstrap';

import "./auth.css";


const Auth = () => {


    return ( 
    
    <div className="eat">
   
        

    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
<Tab eventKey="Signup" title="Signup">
<Signup />
</Tab>
 <Tab eventKey="Login" title="Login">
<Login />
 </Tab>
  
 </Tabs>
   
  
   
   
   </div>
   
   )
}

export default Auth;