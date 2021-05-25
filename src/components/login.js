import "./login.scss";

import {useState} from 'react';
import { Form } from 'react-bootstrap'; // is their a different way i should import this?
import {Button} from 'react-bootstrap';


const Login = () => {

const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");

const authForm = () => {
    return password.length > 0 && userName.length > 0;
}

const response = (event) => {
  event.preventDefault();
}

return (
    <div>
        <Form submit = {response}>
            <Form.Group size="sm" id="userName">
                <Form.Label>UserName</Form.Label>
                <Form.Control type="userName" value={userName} onClick={(e) => setUserName(e.target.value)} />
            </Form.Group>
        </Form>
       
        <Form.Group size="sm" id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onClick={(e) => setPassword(e.target.value)} />
        </Form.Group>

      <Button size="sm" type="submit" disabled={!authForm()}>
          Login
      </Button>
     

    </div>
);
}

export default Login;
