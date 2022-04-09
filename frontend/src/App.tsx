import React, { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import "./App.css"
import SearchBar from "./components/SearchBar/SearchBar";
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import Title from "./components/Title/Title";
import ItemType from "./components/Item/ItemType";
import fakeItems from "./FakeItems";
import ItemList from "./components/Item/ItemList";
import SearchService from "./Services/SearchService";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";

const baseTheme = {
    complementColor: "#999",
    accentColor: "#A766F5",
    invertedColor: "#fff",
    bodyFont: "'Roboto', sans-serif",
    headingFont: "'Montserrat', sans-serif"
}

const Page = styled.div`
    display: flex;
    font-family: ${p => p.theme.bodyFont};
    flex-direction: column;
    gap: 40px;
    padding: 25px;
    align-items: center;
`

const App = () => {

    const empty: ItemType[] = []
    const [itemResults, setItemResults] = useState(empty)

    useEffect(() => {
        
    }, [])

    const handleSearch = (q: string) => {
        SearchService.query(q)
            .then(res => {
                setItemResults(res || [])
            })
    }

    return(
        <ThemeProvider theme={baseTheme}>
            <Page>
                <Title title="EcoPower"/>
                <SearchBar onSearch={handleSearch}/>
                <ItemList items={itemResults}/>
                <Footer/>
                <Navbar />
            </Page>
        </ThemeProvider>
    )
}

export default App