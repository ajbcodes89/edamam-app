import { useState } from "react";
import "./nav.scss";
import {Link} from "react-router-dom";
//import {  Navbar, Collapse, NavbarToggler, NavItem,NavbarBrand} from 'reactstrap';



  const Nav = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      let newIsOpen = !isOpen;
      setIsOpen(newIsOpen); 
      const navStyle = {
    color: 'white'
  };
    } 


  return ( 
 
 /*<Navbar color="faded" light expand="sm">
   <NavbarBrand>
     <Link to="/">Login</Link>
   </NavbarBrand>
   <NavbarToggler onClick={toggle}/>
   <Collapse isOpen={isOpen} navbar>
     <Nav className="click" navbar>
         
       <NavItem> 
         <Link to="/recipes">Search</Link>
         </NavItem>
         
       <NavItem> 
         <Link to="/users">users</Link>
         </NavItem>
         
       <NavItem> 
         <Link onClick={props.clickLogout}>Logout</Link>
         </NavItem>
       </Nav>
   </Collapse>
 </Navbar>
  );
  }*/  
  
   <nav>
    <div className="let">
    <h5>LetsEat.com</h5>
    </div>
    <ul className="nav-links" >
      <Link to="/recipes">
      <li>Home</li>
      </Link>
      <Link to="/">
      <li>Login/Signup</li>
      </Link>
      <Link to="/users">
      <li>User</li>      
      </Link>
      </ul>
  </nav>
  

  
  
  );
} 



export default Nav;