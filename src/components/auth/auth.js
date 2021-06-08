
import Signup from "../../components/auth/signup";
import Login from "../../components/auth/login";
import {Tab,Tabs} from  'react-bootstrap';

import "./auth.css";


const Auth = (props) => {


    return ( 
    
    <div className="eat">
   
        

    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
<Tab eventKey="Signup" title="Signup">
<Signup updateToken={props.updateToken} />
</Tab>
 <Tab eventKey="Login" title="Login">
<Login updateToken={props.updateToken}/>
 </Tab>
  
 </Tabs>
   
  
   
   
   </div>
   
   )
}

export default Auth;

