import JokeItem from "./JokeItem";
import { useState } from "react";
export default function JokeItems({jokes, addEmoji, remove}) {

    const jokeListItems = jokes.map(function (joke, index) {
        return <JokeItem joke={joke} key={index} index={index} addEmoji={addEmoji} remove={remove}/>   })
        return (
            <ul>{jokeListItems}</ul>
        )}
        