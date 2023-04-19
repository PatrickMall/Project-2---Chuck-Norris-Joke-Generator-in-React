export default function JokeItem({joke}) {
    return (
    <li  className="quote-item-container">   
    <p className="quote-item">{joke}</p>
    <button className="remove">X</button>
                    <div className="emoji-container">
                        <div className="emoji">👊</div>
                        <div className="emoji">🔫</div>
                        <div className="emoji">💪</div>        
                    </div>
    </li>
    )
}