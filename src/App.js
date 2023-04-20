import Favourites from './Favourites';
import './App.css';
import Jokes from './Jokes';
import {Routes, Route} from "react-router-dom"; 
import NavBar from './NavBar';
import { useState } from 'react';
function App() {

const [inputJoke, setInputJoke] = useState( );

const [jokes, setJokes] = useState(
  []
)
const jokesUpdater = function () {
  const newJoke = [...jokes, inputJoke];
  setJokes(newJoke);
}
const favouritesClearer = function() {
  setJokes([])
}

const jokeAddEmoji = function(e, index) {
  let addNewEmoji = [...jokes[index], e.target.id]
  const joined = addNewEmoji.join('')
  const jokeCopy = [...jokes]
  jokeCopy.splice(index, 1, joined)
  setJokes(jokeCopy);
}


  return (
    <div className="App">
      <NavBar />
      <Routes >
        <Route path="/" element={<Jokes jokesUpdater={jokesUpdater} inputJoke={inputJoke} setInputJoke={setInputJoke}/>} />
        <Route path="/favourites" element={<Favourites jokes={jokes} clearer={favouritesClearer} addEmoji={jokeAddEmoji}/>} />
      </Routes>
    </div>
  );
}

export default App;
