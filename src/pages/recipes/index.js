import React, {useEffect, useState} from "react";
import "./recipes.scss";
import ResultsCard from "../../components/card";


function Recipes() {
  const APP_ID = "943870ca";
  const APP_KEY = "1ea928e38226f6d40c8f3af4f45995c0";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  
 

  useEffect(() => {
    getRecipes();
  }, [query]);
  
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
    
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  
  

  const addRecipe = (recipeId, imageURL, title) => {
    console.log({ recipeId, imageURL, title })
    fetch("http://localhost:9000/favorites/add" , {
        method: "POST",
        body: JSON.stringify( {
          recipeId: recipeId,
          imageURL: imageURL,
          title: title
        }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })      
    })
      .then(res => console.log(res.json()))
      .then( json => console.log(json))
      .catch ( err => console.log(err.message))
  }




  return (
    <div className="Recipes">
   <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          />
        <button className="search-button" type="submit">
          {" "}
          SEARCH{" "}
        </button>
      </form>
      <div className="recipes">
      {recipes.map((recipe) => (
        <ResultsCard
        key={recipe.recipe.label}
        recipeID={recipe.recipe.uri}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        addFavorite={addRecipe}
        />
        ))}
    </div>
    </div>
  );
};

export default Recipes;
