export default function JokeGenerator({buttonClick, joke}) {
    return (
        <div className="header-container">
                        <button onClick={buttonClick} id="random">Make me laugh 🤣</button>
                        <div id="quote">
                        <p id="quote-paragraph">{joke.joke}</p>
                    </div>
                    </div>
        
    )
}