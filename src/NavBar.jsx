import { Link } from "react-router-dom"
export default function NavBar() {
    return (
        <>
        <Link to="/"><button>Joke Generator</button></Link>
        <Link to="/Favourites"><button>My Favourites</button></Link>
        </>
    )
}