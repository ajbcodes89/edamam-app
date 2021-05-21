import React from "react";
import "./userFavorites.scss";
import {
    Card,
    CardTitle,
    CardText,
    CardGroup,
    CardSubtitle,
    CardBody,
  } from "reactstrap";

  const styles = {
    favSpacing: {
       marginLeft: 20,
       marginRight: 20,
       marginTop: 20,
       marginBottom: 20
     }
   };


function UserFavorites() {
  return (
      
          <CardGroup>
              <h4>My Favorite Recipes</h4>
            <Card style={ styles.favSpacing }> 
             <CardBody body inverse color="primary">
                <CardTitle tag="h5"></CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Comments why this is Favorite
                </CardSubtitle>
                <CardText>
                </CardText>
              </CardBody>
            </Card>
          </CardGroup>
        );
      };
      
        
    export default UserFavorites;
  