export default function Favourites() {
    return (
        <>
        <div className="jokes">
            <div className="layout">
                <div className="content-container">
                    <div className="header-container">
                        <h1 className="favourites-header">My Favourites</h1>
                        <h2 className="favourites-sub-header">You can add your favourite badass emoji to your top jokes or delete your jokes</h2>
                    </div>
                    <div className="quote-item-container">
                        <p class="quote-item">“Chuck Norris once ejaculated
    for forty-five minutes straight.”
                        </p>
                        
                            <button className="remove">X</button>
                            <div className="rating">
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <div className="emoji-container">
                                <div className="emoji">👊</div>
                                <div className="emoji">🔫</div>
                                <div className="emoji">💪</div>
                            
                        </div>
                </div>
            </div>
             <div className="spacing-container">
             </div>
             <footer>
                <div className="rate-container">
                    <h2 className="rate-save">Rate and Save:</h2>
                    <form>
                    <select>
                        <option>Select a rating</option>
                        <option>⭐</option>
                        <option>⭐⭐</option>
                        <option>⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐⭐</option>
                    </select>
                    <button type="submit">This one's a keeper</button>
                    </form>
                </div>
            </footer>   
             </div>
              
        </div>
        </>
    )
}