import { useState } from "react";
import Categories from "./Category";
import JokeGenerator from "./JokeGenerator";
//Main click function that pulls in the joke form the Api
let categorySelected = false;
let categoryType = "";
export default function Jokes() {

    function randomBtnClick() {
        fetch(categorySelected ? `https://api.chucknorris.io/jokes/random?category=${categoryType}` :`https://api.chucknorris.io/jokes/random`)
      .then((response) => response.json())
      .then((results) => {
        const newJoke = results.value
        setInputJoke(newJoke)  
        console.log(categorySelected, categoryType) 
    })
      .catch((error) => alert("Error", error));
      console.log()
    }

// Category button function
function handleAddCategory(e) {
    e.preventDefault()
    if (e.target[0].value === 'random') {
        categorySelected = false;
        categoryType = "";
    } else {
    categoryType = e.target[0].value
    categorySelected = true;
}}
    //inputJoke State
    const [inputJoke, setInputJoke] = useState( );


    
    
    return (

        <>
        <div className="jokes">
            <div className="layout">
                <div className="content-container">
                    <Categories categoryBtn={handleAddCategory}/>
                    <h1 className="generator-header">Chuck Norris <br />Joke Generator</h1>
                    <JokeGenerator  joke={inputJoke} buttonClick={randomBtnClick}/>
            </div>
             <div className="spacing-container">
             </div>
             <footer>
                <div className="rate-container">
                    <h2 className="rate-save">Rate and Save:</h2>
                    <form>
                    <select>
                        <option>Select a rating</option>
                        <option>⭐</option>
                        <option>⭐⭐</option>
                        <option>⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐⭐</option>
                    </select>
                    <button type="submit">This one's a keeper</button>
                    </form>
                </div>
            </footer>   
             </div>
              
        </div>
        </>
    )
}
