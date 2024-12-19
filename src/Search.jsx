import "./app.css"
import React from 'react';

const Search = ({ searchTerm, onSearchChange }) => {
    return (
        <input type="text" placeholder="Search..." value={searchTerm} onChange={onSearchChange} />
    )
}

export default Search