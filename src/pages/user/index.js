import React from "react";
import { Container, Row, Col } from 'reactstrap';

import UserProfile from "../../components/userProfile";
import UserFavorites from "../../components/userFavorites";
import "./user.scss";

const styles = {
 userSpace: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20
  }
};


function Users() {
  return (
    <Container fluid className="container-user">
      <Row style={styles.userSpace} xs="2">
        <Col style={ styles.userSpace} sm={{ size: 6, order: 2, offset: 1 }}>
        <UserProfile />
        </Col>
      </Row>
      <Row xs="2">
        <Col>
        <UserFavorites />
        <UserFavorites />
        <UserFavorites />
        <UserFavorites />
        </Col>
      </Row>
    </Container>
    );
  }
  
  export default Users;
  
  // <div className="Results">
  //   <UserProfile className="userProfile" />
  //   <UserFavorites className="userFavorites" />
  // </div>