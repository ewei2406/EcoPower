import React, { useState } from "react";
import styled from 'styled-components'
import Button from "../Button/Button";
import { MdOutlineLightbulb } from "react-icons/md"

const NavWrapper = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
`

const Inspiration = styled.div`
    padding: 20px;
    position: fixed;
    z-index: 9900;
    width: 400px;
    filter: drop-shadow(0 4px 8px #aaa);
    background-color: ${p => p.theme.invertedColor};
    border-radius: 10px;
    top: 20px;
    right: 200px;
    height: 400px;
`

const Navbar = () => {

    const [showInsp, setShowInsp] = useState(false)

    return (<NavWrapper>
        <Button onClick={() => setShowInsp(!showInsp)} content={<>Inspiration<MdOutlineLightbulb/></>}/>

        {showInsp && <Inspiration>
                Inspiration
            </Inspiration>}
    </NavWrapper>)
}

export default Navbar