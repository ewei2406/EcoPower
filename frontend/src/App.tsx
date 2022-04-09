import React, { useState } from "react";
import Button from "./components/Button";
import "./App.css"
import SearchBar from "./components/SearchBar/SearchBar";
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import Title from "./components/Title/Title";
import ItemType from "./components/Item/ItemType";

const baseTheme = {
    complementColor: "#555",
    accentColor: "#027FFF",
    invertedColor: "#fff",
    bodyFont: "'Roboto', sans-serif",
    headingFont: "'Montserrat', sans-serif"
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const App = () => {

    const [itemResults, setItemResults] = useState([])

    return(
        <ThemeProvider theme={baseTheme}>
            <Page>
                <Title title="TITLE"/>
                <SearchBar/>
            </Page>
        </ThemeProvider>
    )
}

export default App