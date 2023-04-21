import JokeItem from "./JokeItem";

export default function JokeItems({jokes, addEmoji, remove, flag}) {

    const jokeListItems = jokes.map(function (joke, index) {
        return <JokeItem joke={joke} key={index} index={index} addEmoji={addEmoji} remove={remove} flag={flag}/>   })
        return (
            <ul>{jokeListItems}</ul>
        )}
        