import React from 'react'

function SearchBar ()
{
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search businesses"></input>
            <input type="text" placeholder="Search location"></input>
            <button>Search</button>
            <div className="sorting-options">
                <button>Best Match</button>
                <button>Highest Rated</button>
                <button>Most Reviewed</button>
            </div>
        </div>
    )
}

export default SearchBar