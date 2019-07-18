import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = "704fbd7a";
  const APP_KEY = "988dcf892a8f74df6639be7777192412";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('popular');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    // const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    // const data = response.json();
    // setRecipes(data);
    //console.log(data)
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(res => res.json())
        .then(data => 
          setRecipes(data.hits),
          //console.log(data),
          (error) => {
            console.log("Error: "+error)
          }
      )
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    setIndex(1);
  };

  const screens = index => {
    switch(index) {
      default:
        case 1:
          return(<div className="recipes">
            {recipes.map(recipe => (
              <Recipe 
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image={recipe.recipe.image} 
                ingredients={recipe.recipe.ingredients}
                recipe={recipe.recipe.url}
                totalTime={recipe.recipe.totalTime}
              />
            ))}
          </div>)
        case 0:
          return(<div className="textCenter">
                  <h1>Welcome to iRecipe</h1>
                  <p>Type any ingredient into the search bar and see all the possibilities for your next meal.
</p>
                </div>
          )
    }  
  };

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {screens(index)}
    </div>
  );
};

export default App;
