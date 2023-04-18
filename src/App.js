import Favourites from './Favourites';
import './App.css';
import Jokes from './Jokes';
import {Routes, Route} from "react-router-dom"; 
import NavBar from './NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes >
        <Route path="/" element={<Jokes />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
