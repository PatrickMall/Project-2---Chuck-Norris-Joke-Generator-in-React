import Favourites from './Favourites';
import './App.css';
import Jokes from './Jokes';
import {Routes, Route} from "react-router-dom"; 
import NavBar from './NavBar';
import { useState } from 'react';
function App() {

//useState for Jokes
// InputJoke State
const [inputJoke, setInputJoke] = useState( );

const [jokes, setJokes] = useState(
  []
)
const jokesUpdater = function () {
  const newJoke = [...jokes, inputJoke];
  setJokes(newJoke);
  console.log(jokes)
}
const favouritesClearer = function() {
  setJokes([])
}

  return (
    <div className="App">
      <NavBar />
      <Routes >
        <Route path="/" element={<Jokes jokesUpdater={jokesUpdater} inputJoke={inputJoke} setInputJoke={setInputJoke}/>} />
        <Route path="/favourites" element={<Favourites jokes={jokes} clearer={favouritesClearer}/>} />
      </Routes>
    </div>
  );
}

export default App;
