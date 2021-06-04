import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
// import APIURL from '../../helpers/environment';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
    const handleSubmit = (event) => {
        event.preventDefault();
       // console.log(username, password);
       fetch("http://localhost:9000/user/register", {
       method: 'POST',
       body: JSON.stringify( {userName: username, password: password}),
       headers: new Headers({
           'Content-Type': 'application/json'
       })
    }).then(
        (response) => response.json()
    ).then((data) => {
        props.updateToken(data.sessionToken)
    })
    }


    return(
        <div>
            <h1>Signup</h1>
            <Form onSubmit={handleSubmit}>
            
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Signup</Button>

            </Form>
        </div>
    )
}
export default Signup;