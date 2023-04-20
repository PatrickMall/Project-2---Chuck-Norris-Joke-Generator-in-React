import Favourites from './Favourites';
import './App.css';
import Jokes from './Jokes';
import {Routes, Route} from "react-router-dom"; 
import NavBar from './NavBar';
import { useState } from 'react';
function App() {

const [inputJoke, setInputJoke] = useState([]);

const [jokes, setJokes] = useState(
  []
)
const jokesUpdater = function () {
  const newJoke = [...jokes, inputJoke];
  setJokes(newJoke);
  console.log(jokes)
  console.log(inputJoke)
}
const favouritesClearer = function() {
  setJokes([])
}

const jokeAddEmoji = function(e, index) {
  const jokeForAdding = [...jokes[index].joke, e.target.id]
  const joined = jokeForAdding.join('')
  const jokeCopy = [...jokes]
  jokeCopy[index].joke = joined
  setJokes(jokeCopy);
}

const removeJoke = function(e, index) {
const removeJoke = [...jokes]
let newJokeArr = removeJoke.filter( item => item !== removeJoke[index])
setJokes(newJokeArr);
}

const flagJoke = function(e, index) {
  const flagJoke = [...jokes]
  flagJoke[index].flagged ? flagJoke[index].flagged = false : flagJoke[index].flagged = true
  setJokes(flagJoke);
}


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
