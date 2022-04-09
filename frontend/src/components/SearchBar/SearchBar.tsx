import React, { useState } from "react";
import styled from "styled-components"

const SearchWrapper = styled.input`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
`

const SearchBar = () => {
    const [search, setSearch] = useState("")

    return (
        <SearchWrapper type="text" value={search} onChange={e => setSearch(e.target.value)}/>
    )
}

export default SearchBar