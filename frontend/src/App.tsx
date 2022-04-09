import React, { useState } from "react";
import Button from "./components/Button/Button";
import "./App.css"
import SearchBar from "./components/SearchBar/SearchBar";
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import Title from "./components/Title/Title";
import ItemType from "./components/Item/ItemType";
import fakeItems from "./FakeItems";
import ItemList from "./components/Item/ItemList";

const baseTheme = {
    complementColor: "#777",
    accentColor: "#027FFF",
    invertedColor: "#fff",
    bodyFont: "'Roboto', sans-serif",
    headingFont: "'Montserrat', sans-serif"
}

const Page = styled.div`
    display: flex;
    font-family: ${p => p.theme.bodyFont};
    flex-direction: column;
    gap: 50px;
    align-items: center;
`

const App = () => {

    const [itemResults, setItemResults] = useState(fakeItems)

    return(
        <ThemeProvider theme={baseTheme}>
            <Page>
                <Title title="TITLE"/>
                <SearchBar/>
                <ItemList items={itemResults}/>
            </Page>
        </ThemeProvider>
    )
}

export default App