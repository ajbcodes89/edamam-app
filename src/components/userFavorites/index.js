import React from "react";

import {
  Card,
  CardTitle,
  CardImg,
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
    marginBottom: 20,
  },
};

const UserFavoriteCard = (props) => {
  const { info } = props;

  // console.log(info);

  return (
    <CardGroup>
      <h4>My Favorite Recipes</h4>
      <Card style={styles.favSpacing}>
        <CardBody body inverse color="primary">
          <CardImg top width="100%" src={info.image} alt="Card image cap" />
          <CardTitle tag="h5"> {info.label} </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {info.calories}
          </CardSubtitle>
          <CardText></CardText>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default UserFavoriteCard;
