//IMPORTS

import Favourites from './Favourites';
import './App.css';
import Jokes from './Jokes';
import {Routes, Route} from "react-router-dom"; 
import NavBar from './NavBar';
import { useState } from 'react';

function App() {


//USESTATES

// UseState for storing initial api result
const [inputJoke, setInputJoke] = useState([]);

// UseState for main jokes array that feeds into favourites
const [jokes, setJokes] = useState([])



//CALLBACKS

//CALLBACK function that adds the inital joke to the main jokes array
const jokesUpdater = function () {
  const newJoke = [...jokes, inputJoke]
  setJokes(newJoke)
}

//CALLBACK function that clears the main array on button click
const favouritesClearer = function() {
  setJokes([])
}

//CALLBACK  function that adds emoji to a joke
const jokeAddEmoji = function(e, index) {
  const jokeForAdding = [...jokes[index].joke, e.target.id]
  const joined = jokeForAdding.join('')
  const jokeCopy = [...jokes]
  jokeCopy[index].joke = joined
  setJokes(jokeCopy);
}

//CALLBACK function that removes a single joke from the useState on 'X' click
const removeJoke = function(e, index) {
const removeJoke = [...jokes]
let newJokeArr = removeJoke.filter( item => item !== removeJoke[index])
setJokes(newJokeArr);
}

//CALLBACK that toggles flagged key in joke object
const flagJoke = function(e, index) {
  const flagJoke = [...jokes]
  flagJoke[index].flagged ? flagJoke[index].flagged = false : flagJoke[index].flagged = true
  setJokes(flagJoke)
}

//RETURN 
  return (
    <div className="App">
      <NavBar />
      <Routes >
        <Route path="/" element={<Jokes jokesUpdater={jokesUpdater} inputJoke={inputJoke} setInputJoke={setInputJoke}/>} />
        <Route path="/favourites" element={<Favourites jokes={jokes} clearer={favouritesClearer} addEmoji={jokeAddEmoji} remove={removeJoke} flag={flagJoke}/>} />
      </Routes>
    </div>
  );
}

export default App;
