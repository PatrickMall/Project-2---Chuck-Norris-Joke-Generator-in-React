import { useState } from "react"
export default function JokeItem({joke}) {
    const [addEmoji, setaddEmoji] = useState(
        joke
    )
const jokeAddEmoji = function(e) {
    let addNewEmoji = [...addEmoji, e.target.id]
    addNewEmoji.join('')
    setaddEmoji(addNewEmoji)
    console.log(addNewEmoji)
}
    return (
        <li  className="quote-item-container">   
            <p className="quote-item">{addEmoji}</p>
            <button className="remove">X</button>
            <div className="emoji-flag">🏴</div>
            <div className="emoji-container">
                <div className="emoji" id="👊" onClick={jokeAddEmoji}>👊</div>
                <div className="emoji" id="🔫" onClick={jokeAddEmoji}>🔫</div>
                <div className="emoji" id="💪"onClick={jokeAddEmoji}>💪</div>        
            </div>
        </li>
    )
}