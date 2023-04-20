
export default function JokeItem({joke, addEmoji, index}) {

    return (
        <li  className="quote-item-container">   
            <p className="quote-item">{joke}</p>
            <button className="remove">X</button>
            <div className="emoji-flag">🏴</div>
            <div className="emoji-container">
                <div className="emoji" id="👊" onClick={(e) => addEmoji(e, index)}>👊</div>
                <div className="emoji" id="🔫" onClick={(e) => addEmoji(e, index)}>🔫</div>
                <div className="emoji" id="💪"onClick={(e) => addEmoji(e, index)}>💪</div>        
            </div>
        </li>
    )
}