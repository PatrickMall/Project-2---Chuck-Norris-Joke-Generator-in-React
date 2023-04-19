export default function Categories({categoryBtn}) {
    return (
        <div className="category-container">
                        <h2 className="categories">Categories:</h2>
                        <form onSubmit={categoryBtn}>
                        <select>
                            <option value={""}>--pick a category</option>
                            <option value="random">No category</option>
                            <option value="animal">Animal</option>
                            <option value="career">Career</option>
                            <option value="celebrity">Celebrity</option>
                            <option value="dev">Dev</option>
                            <option value="explicit">Explicit</option>
                            <option value="fashion">Fashion</option>
                            <option value="food">Food</option>
                            <option value="history">History</option>
                            <option value="money">Money</option>
                            <option value="movie">Movie</option>
                            <option value="music">Music</option>
                            <option value="political">Political</option>
                            <option value="religion">Religion</option>
                            <option value="science">Science</option>
                            <option value="sport">Sport</option>
                            <option value="travel">Travel</option>
                        </select>
                        <button type="submit">Select</button>
                        </form>
                    </div>
    )
}