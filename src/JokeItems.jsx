import JokeItem from "./JokeItem";
import { useState } from "react";
export default function JokeItems({jokes}) {

    const jokeListItems = jokes.map(function (joke, index) {
        return <JokeItem joke={joke} key={index}/>   })
        return (
            <ul>{jokeListItems}</ul>
        )}
        