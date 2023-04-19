import QuoteItems from "./JokeItems";

export default function Favourites() {

//useState for JokeItems
    return (
        <>
        <div className="jokes">
            <div className="layout">
                <div className="content-container">
                    <div className="header-container">
                        <h1 className="favourites-header">My Favourites</h1>
                        <h2 className="favourites-sub-header">You can add your favourite badass emoji to your top jokes or delete your jokes</h2>
                    </div>
                    <JokeItems />
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