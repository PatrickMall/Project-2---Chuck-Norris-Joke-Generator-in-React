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
                <div className="clear-all-container">
                    <button className="clear-all">Clear all my Jokes</button>
                </div>
            </footer>   
             </div>
              
        </div>
        </>
    )
}