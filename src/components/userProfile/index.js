import React from "react";
import {  Container, Row, Col, Card, CardText, CardBody, } from 'reactstrap';

import "./userProfile.scss";


function UserProfile(props) {
  return (
  
    <div>
      <div className="user-img" >

        <img src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="img"

        />
      </div>
      <div className="user-name" > 
        {/* <h4>{props.userName}</h4> */}
      </div>
    </div>
 
  );
}

export default UserProfile;