import JokeItem from "./JokeItem";
import { useState } from "react";
export default function JokeItems({jokes, addEmoji}) {

    const jokeListItems = jokes.map(function (joke, index) {
        return <JokeItem joke={joke} key={index} index={index} addEmoji={addEmoji}/>   })
        return (
            <ul>{jokeListItems}</ul>
        )}
        