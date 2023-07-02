import { useState } from "react";

const Search = () => {
    const [searchText, setSearchText] = useState("");
    console.log("search load");
    return (
        <div className="search">
            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            <button className="search-btn">Search</button>
        </div>
    );
}

export default Search