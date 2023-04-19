import { useState } from "react";
import Categories from "./Category";
import JokeGenerator from "./JokeGenerator";
//Category Variables that are globally needed for other click functions
let categorySelected = false;
let categoryType = "";

export default function Jokes({jokesUpdater, inputJoke, setInputJoke}) {



    // Main click function that pulls in the joke form the Api
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

//Save to Favourites
function handleFavouriting() {

}










    
    
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
                    <h2 className="rate-save">Save to favourites</h2>
                    <button onClick={jokesUpdater}>This one's a keeper</button>
                </div>
            </footer>   
             </div>
              
        </div>
        </>
    )
}
