import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
const APP_ID = "ac96f630";
const APP_KEY = "44a3b47579c28c93bee1c81911fbc542";

const [counter, setCounter] = useState(0);

useEffect( () => {
  
}, [])
const detRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data  = await response.json();
  console.log(data);
}


  return(
    <div className = "App">
      <form className="serch-form">
        <input className="search-bar" type="text"/>
        <button 
      
        className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;