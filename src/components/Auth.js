import {useState} from 'react';

const Auth = (props) => {
    const[firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

     const response = (event) => {
         event.preventDefault();

         let reqBody = login ? 
         {
             email: email,
             password: password
         } : {
             firstName: firstName,
             lastName: lastName,
             email: email,
             password: password
       };
    let url = login ? 'http://localhost:9000/user/login' : 'http://localhost:9000/user/register'; 
      
     fetch(url, {
         method: 'POST',
         body: JSON.stringify(reqBody),
         headers: new Headers({
             'Content-Type': 'application/json'
         })
     })
     .then(response => response.json())
     .then(json => props.updateToken(json.token))
}

    
    const header = () => {
          return login ? 'Login' : 'Signup';
    }
  
    const loginSwitch = () => {
       e.preventDefault(); 
       setLogin(!login);
       setEmail('');
       setPassword('');
       setFirstName('');
       setLastName('');
    }
    
    const signup = () => !login ?
    (
        <div>
           <label htmlFor='firstName'>First Name</label>
           <br />
           <input type='text' id='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} />
       <br />
           <input type='text' id='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>
  ) :null
   
    return(
        <div>
            <form>
                <h1>{header()}</h1>
                {signup()}
                <label htmlFor='email'>Email</label>
                <br />
                <input type='text' id='email' value={email} onChange={(e) => {setEmail(e.target.value);console.log(e)}} />
                <br />
                <label htmlFor='password'>Password</label>
                <br />
                <input type='text' id='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <br />
                <button onClick={loginSwitch}>Login/Signup</button>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Auth;