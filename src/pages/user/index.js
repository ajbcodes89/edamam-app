import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

import "./user.scss";
import UserProfile from "../../components/userProfile";
import UserFavoriteCard from "../../components/userFavorites";

const styles = {
  userSpace: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20,
  },
};

function User() {
  const APP_ID = "943870ca";
  const APP_KEY = "1ea928e38226f6d40c8f3af4f45995c0";

  const [favorites, setFavorites] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);
  const [restrict, setRestrict] = useState(0);

  useEffect(() => {
    // setRestrict(0);
    fetch("http://localhost:9000/favorites/mine", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.mine);
        setFavorites(json.mine);
      });
  }, []);
  // console.log(favorites);

  const getFavorites = async (id) => {
    // setRestrict(restrict + 1);
    const response = await fetch(
      `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&r=http://www.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${id}`,
      {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      }
    );
    const data = await response.json();
    console.log(data);

    setCardInfo(data[0]);
    // console.log(cardInfo);
  };

  // getFavorites("5e7b278b580ccea8ab485607dff5416a");

  const displayFavorites = () => {
    const recipeData = {
      image: "Image",
      label: "Title",
      calories: "Calories",
    };
    // return [
    //   <UserFavoriteCard
    //     key={"Column Names"}
    //     info={recipeData}
    //     info={cardInfo}
    //   />,
    // ].concat(

    console.log("PLEASE LOOK HERE", favorites);

    //! take database array and call 1 item (0) use the restrict variable and change with +1 or -1
    // take recipe id and use the single item fetch to get that json data
    // take that data and export into our card
    // the card needs a button fwrd and bck button to cycle through favorites one by one

    // const cardFinal = getFavorites
    console.log(favorites[restrict]);
    // getFavorites(favorites[restrict].recipeId);

    return <UserFavoriteCard info={cardInfo} />;

    // return favorites.map((favorite, index) => {
    //   if (restrict < 2 ) {
    //   console.log(favorite);
    //   console.log(cardInfo);
    // }
    // return null
    // })
    // );
  };

  return (
    <Container fluid className="container-user">
      <Row style={styles.userSpace} xs="2">
        <Col style={styles.userSpace} sm={{ size: 6, order: 2, offset: 1 }}>
          <UserProfile />
        </Col>
      </Row>
      <Row xs="2">
        {/* <Col>{favorites?.map((favorite, index) => {
        if (restrict < 1 ) {
        console.log(favorite);
        getFavorites(favorite.recipeId);
        console.log(cardInfo);
        return <UserFavoriteCard key={index} info={cardInfo} />;
      }
      return null
      })}</Col> */}
        <Col>{displayFavorites()}</Col>
      </Row>
    </Container>
  );
}

export default User;
