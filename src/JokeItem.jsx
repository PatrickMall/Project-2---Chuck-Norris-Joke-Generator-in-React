
export default function JokeItem({joke, addEmoji, index, remove, flag}) {

    
    return (
        <li  className= {joke.flagged === true ? "quote-item-container-flagged" : "quote-item-container"}>   
            <p className= {joke.flagged === true ?"quote-item-flagged" : "quote-item"}>{joke.joke}</p>
            <button className= {joke.flagged === true ? "remove-flagged" :"remove"} onClick={(e) => remove(e, index)}>X</button>
            <div className={joke.flagged === true ? "emoji-flag-flagged" :"emoji-flag"} onClick={(e) => flag(e, index)}>🏴</div>
            <div className="emoji-container">
                <div className={joke.flagged === true ? "emoji-flagged" :"emoji"} id="👊" onClick={(e) => addEmoji(e, index)}>👊</div>
                <div className={joke.flagged === true ? "emoji-flagged" :"emoji"} id="🔫" onClick={(e) => addEmoji(e, index)}>🔫</div>
                <div className={joke.flagged === true ? "emoji-flagged" :"emoji"} id="💪"onClick={(e) => addEmoji(e, index)}>💪</div>        
                <div className={joke.flagged === true ? "emoji-flagged" :"emoji"} id="💥"onClick={(e) => addEmoji(e, index)}>💥</div>        
                <div className={joke.flagged === true ? "emoji-flagged" :"emoji"} id="🥷"onClick={(e) => addEmoji(e, index)}>🥷</div>        
                <div className={joke.flagged === true ? "emoji-flagged" :"emoji"} id="🥋"onClick={(e) => addEmoji(e, index)}>🥋</div>        
                <div className={joke.flagged === true ? "emoji-flagged" :"emoji"} id="🗡"onClick={(e) => addEmoji(e, index)}>🗡</div>        
            </div>
        </li>
    )
   
}