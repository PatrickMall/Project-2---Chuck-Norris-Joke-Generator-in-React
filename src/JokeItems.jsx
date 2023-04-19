import JokeItem from "./JokeItem";
export default function JokeItems({jokes}) {
    console.log(jokes)
   
    const jokeListItems = jokes.map(function (joke, index) {
        return <JokeItem joke={joke} key={index} />   })
        return (
            <ul>{jokeListItems}</ul>
        )}
        