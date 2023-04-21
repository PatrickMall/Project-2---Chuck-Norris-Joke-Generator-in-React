export default function Save({jokesUpdater}) {
    return (
        <div className="favourite-container">
            <h2 className="save">Save to favourites</h2>
            <button onClick={jokesUpdater}>This one's a keeper</button>
        </div>
    )
}