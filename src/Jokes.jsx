export default function Jokes() {
    return (

        <>
        <div className="jokes">
            <div className="layout">
                <div className="content-container">
                    <div className="category-container">
                        <h2 className="categories">Categories:</h2>
                        <select>
                            <option>pick a category</option>
                            <option>animal</option>
                            <option>career</option>
                            <option>celebrity</option>
                            <option>dev</option>
                            <option>explicit</option>
                            <option>fashion</option>
                            <option>food</option>
                            <option>history</option>
                            <option>money</option>
                            <option>movie</option>
                            <option>music</option>
                            <option>political</option>
                            <option>religion</option>
                            <option>science</option>
                            <option>sport</option>
                            <option>travel</option>
                        </select>
                    </div>
                    <div className="header-container">
                        <h1>Chuck Norris <br />Joke Generator</h1>
                        <button id="random">Make me laugh 🤣</button>
                    </div>
                    <div id="quote">
                        <p>“Chuck Norris once ejaculated
    for forty-five minutes straight.”
                        </p>
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
