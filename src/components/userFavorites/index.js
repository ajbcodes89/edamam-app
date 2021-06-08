import React, {useState, useEffect } from "react";
//import "./userFavorites.scss";
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

   //const UserFavorites = () => {
function UserFavorites() {
  const [favorites, setFavorites] = useState([])
  
  
  
  useEffect(() => {
    fetch("http://localhost:9000/favorites/mine" , {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      })
    })
      .then(res => (res.json()))
      .then( json => {
        setFavorites(json.mine)
        console.log(json.mine)
      })
  }, [])
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
