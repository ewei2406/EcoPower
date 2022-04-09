import React, { useState } from "react";
import styled from "styled-components"
import { RoundedInput } from "../Styles/RoundedRect";


const SearchBar = () => {
    const [search, setSearch] = useState("")

    return (
        <RoundedInput type="text" value={search} onChange={e => setSearch(e.target.value)}/>
    )
}

export default SearchBar