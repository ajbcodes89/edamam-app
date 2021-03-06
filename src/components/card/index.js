import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";

const ResultsCard = ({
  title,
  recipeID,
  calories,
  image,
  ingredients,
  addFavorite,
}) => {
  const id = recipeID.slice(51);
  console.log(id);
  return (
    <CardGroup>
      <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody body inverse color="primary">
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {calories}
          </CardSubtitle>
          <CardText>
            <ol>
              {" "}
              {ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </ol>
          </CardText>
          <Button
            color="primary"
            className="addButton"
            onClick={(e) => addFavorite(`${id}`, `${image}`, `${title}`)}
          >
            Add Recipe
          </Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default ResultsCard;
