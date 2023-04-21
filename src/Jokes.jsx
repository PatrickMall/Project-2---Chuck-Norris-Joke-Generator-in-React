import Categories from "./Category";
import JokeGenerator from "./JokeGenerator";
import Save from "./Save";


//CATEGORY VARIABLES
let categorySelected = false;
let categoryType = "";


export default function Jokes({jokesUpdater, inputJoke, setInputJoke}) {

//CLICK FUNCTION - pulls random api or category api depending on category selected variable status
    function randomBtnClick() {
        fetch(categorySelected ? `https://api.chucknorris.io/jokes/random?category=${categoryType}` :`https://api.chucknorris.io/jokes/random`)
            .then((response) => response.json())
            .then((results) => {
                const newJoke = {joke: results.value, flagged: false}
                setInputJoke(newJoke)  
                })
             .catch((error) => alert("Error", error));
    }

// CLICK FUNCTION that toggles for Category selected and allows the template literal api fetch to work above
function handleAddCategory(e) {
    e.preventDefault()
    if (e.target[0].value === 'random') {
        categorySelected = false;
        categoryType = "";
    } else {
        categoryType = e.target[0].value
        categorySelected = true;
}}

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
                    <Save  jokesUpdater={jokesUpdater}/>
                </footer>   
             </div>        
        </div>
    </>
    )
}
