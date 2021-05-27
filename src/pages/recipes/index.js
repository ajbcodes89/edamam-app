import React, {useEffect, useState} from "react";
import "./recipes.scss";
import ResultsCard from "../../components/card";


function Recipes() {
  const APP_ID = "943870ca";
  const APP_KEY = "1ea928e38226f6d40c8f3af4f45995c0";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

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
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
        ))}
    </div>
    </div>
  );
};

export default Recipes;
