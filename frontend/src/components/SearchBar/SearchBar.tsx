import React, { useState } from "react";
import styled from "styled-components"
import { AiOutlineSearch } from "react-icons/ai"
import SearchService from "../../Services/SearchService";

const SearchWrapper = styled.input`
    width: 400px;
    border: none;
    padding: 20px;
    font-size: inherit;
    background-color: transparent;
    color: inherit;
    font-family: inherit;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: inherit;
    }
`

const Wrapper = styled.div`
    color: ${p => p.theme.accentColor};
    background-color: ${p => p.theme.invertedColor};
    font-family: ${p => p.theme.headingFont};
    font-size: 1em;
    border-radius: 2em;
    display: flex;
    align-items: center;
    gap: 5px;
    padding-right: 20px;
    overflow: hidden;

    filter: drop-shadow(0 4px 8px #aaa);
    transition: 0.1s ease all;

    &:hover {
        transform: scale(1.04);
    }

    &:focus-within {
        transform: scale(1.04);
    }
`

const SearchBar = ({ onSearch }: { onSearch: React.Dispatch<any> }) => {
    const [search, setSearch] = useState("")

    return (
        <Wrapper>
            <SearchWrapper 
                placeholder="Enter a search term"
                type="text" 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                onKeyDown={e => {if (e.key === "Enter") onSearch(search)}}
                />
            <AiOutlineSearch/>
        </Wrapper>
    )
}

export default SearchBar