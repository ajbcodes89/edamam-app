
import React, {useEffect, useState} from "react";
import Recipe from '../recipes';
import './App.scss';

// import RecipeSearch from "../search";

function App() {

  const APP_ID = "943870ca";
  const APP_KEY = "1ea928e38226f6d40c8f3af4f45995c0";
  
  const [recipes, setRecipes] = useState([]);

 

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    // console.log(data);
    //! this console log will display the "json-ified" data for you, in order to see what hits are available.
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit" > SEARCH </button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        /> 
      ))
      }
    </div>
  );
};

export default App;
