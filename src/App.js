import './App.css';
import Axios from 'axios';
import "./App.css"
import { useState} from 'react';


function App() {
  const [query, setQuery] = useState("");


  // const YOUR_APP_ID = "53fbf1e7";
  // const YOUR_APP_KEY = "7b0970a308d613bc0bd1169e7a3f5fcd";

  var url = `https://api.edamam.com/search?q=${query}&
  app_id=${process.env.REACT_APP_YOUR_APP_ID}
  &app_key=&${process.env.REACT_APP_YOUR_APP_KEY}&
  from=0&to3&calories=591-722&health=alcohol-free`;

  async function getRecipes(){
    var result = await Axios.get(url);
    console.log(result.data);

  }

  return (
    <div className="app">
      <h1 onClick={getRecipes}>🥞🍱🥗Food Recipes🍜🍤🍔</h1>
      <form className="app__searchForm">
        <input type="text"
        className="app__input" 
        placeholder='Enter ingredient' 
        value={query} 
        onChange={ (e)=> setQuery(e.target.value)} />
        <input className="app__searchButton"type='submit' value="Search" />
      </form>

    </div>
  );
}

export default App;
