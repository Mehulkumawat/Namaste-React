import { useState } from "react";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  console.log("search load");
  return (
    <div className="search">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="search-btn" onClick={() => {
        const filteredList = props.res.filter((r)=>
            r.data.name.toLowerCase().includes(searchText.toLowerCase())
        )
        props.setFilteredRestaurant(filteredList);

      }}>
        Search
      </button>
    </div>
  );
};

export default Search;
