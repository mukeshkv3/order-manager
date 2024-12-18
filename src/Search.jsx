/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Search = ({ searchTerm, onSearchChange }) => {
    return (
        <input type="text" placeholder="Search..." value={searchTerm} onChange={onSearchChange} />
    )
}

export default Search