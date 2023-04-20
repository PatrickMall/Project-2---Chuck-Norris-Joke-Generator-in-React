
export default function JokeItem({joke, addEmoji, index, remove, flag}) {

    return (
        <li  className="quote-item-container">   
            <p className="quote-item">{joke}</p>
            <button className="remove" onClick={(e) => remove(e, index)}>X</button>
            <div className="emoji-flag" onClick={(e) => flag(e, index)}>🏴</div>
            <div className="emoji-container">
                <div className="emoji" id="👊" onClick={(e) => addEmoji(e, index)}>👊</div>
                <div className="emoji" id="🔫" onClick={(e) => addEmoji(e, index)}>🔫</div>
                <div className="emoji" id="💪"onClick={(e) => addEmoji(e, index)}>💪</div>        
            </div>
        </li>
    )
}