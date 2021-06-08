import {useState} from 'react';
import {Link} from 'react-router-dom';
import "./login.css";

//import Signup from './signup';

//signup page
const Login = (props) => {
    
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
  const handleSubmit = (event) => {
        event.preventDefault();
       // console.log(username, password);
       fetch("http://localhost:9000/user/login",{
       method: 'POST',
       body: JSON.stringify( {userName: username, password: password}),
       headers: new Headers({
           'Content-Type': 'application/json'
       })
    }) .then(
        (response) => response.json()
    ).then((data) => {
        props.updateToken(data.token);
        localStorage.setItem('token',data.token);
        console.log(data);
    })
  }
  return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="userName">
              <label htmlFor="userName">User Name</label>
              <input
               placeholder="userName"
                type="text"
                id="userName"
                onChange={(event) => { setUsername(event.target.value)}}
              />
             </div>
           <br />
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                placeholder="Password"
                type="password"
                id="password"
                onChange={(event) => { setPassword(event.target.value)}}/>
              </div>
              <br />
              <br />
            <div className="login">
              <Link to="/recipes">
              <button type="submit">Login</button>
              </Link>
              <br />
              
              
            </div>
          </form>
        </div>
      </div>
    );
  }

export default Login;


















/*import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
  const handleSubmit = (event) => {
        event.preventDefault();
       // console.log(username, password);
       fetch("http://localhost:9000/user/login",{
       method: 'POST',
       body: JSON.stringify( {userName: username, password: password}),
       headers: new Headers({
           'Content-Type': 'application/json'
       })
    }) .then(
        (response) => response.json()
    ).then((data) => {
        props.updateToken(data.token);
        localStorage.setItem('token',data.token);
        console.log(data);
    })
  }
  
    return(
        <div>
            
            <h1>Login</h1>
            <Form onSubmit = {handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Login</Button>
           </Form>
           
        </div>
    )
}
export default Login;*/