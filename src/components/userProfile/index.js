import React from "react";
import {  Container, Row, Col, Card, CardText, CardBody, } from 'reactstrap';

import "./userProfile.scss";


function UserProfile() {
  return (
  
    <Container>
      <Row  xs="2">
        <Col sm={{ size: 6, order: 2, offset: 1 }}>

          <Card style={{borderRadius: 50 }}>
        <img style={{borderTopRightRadius: 50, borderTopLeftRadius: 50 }} className="user-img" src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="User Avatar" />
         <CardBody>
          <CardText>Beezle Bryan</CardText>
          </CardBody>
        </Card>
        
      </Col>
      </Row>
      
      
    </Container>
 
  );
}

export default UserProfile;