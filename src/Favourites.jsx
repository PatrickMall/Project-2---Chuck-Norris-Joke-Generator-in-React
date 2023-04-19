
import JokeItems from "./JokeItems"

export default function Favourites({jokes, clearer}) {


    return (
        <>
        <div className="jokes">
            <div className="layout">
                <div className="content-container">
                    <div className="header-container">
                        <h1 className="favourites-header">My Favourites</h1>
                        <h2 className="favourites-sub-header">You can add your favourite badass emoji to your top jokes or delete your jokes</h2>
                    </div>
                    <JokeItems jokes={jokes} />
            </div>
             <div className="spacing-container">
             </div>
             <footer>
                <div className="clear-all-container">
                    <button className="clear-all" onClick={clearer}>Clear all my Jokes</button>
                </div>
            </footer>   
             </div>
              
        </div>
        </>
    )
}