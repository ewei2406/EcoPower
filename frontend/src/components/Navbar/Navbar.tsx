import React, { useState } from "react";
import styled from 'styled-components'
import Button from "../Button/Button";
import { MdOutlineLightbulb, MdEmail } from "react-icons/md"

const NavWrapper = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
`

const NavWrapperLeft = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
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

const H = styled.div`
    font-family: ${p => p.theme.headingFont};
    color: ${p => p.theme.accentColor};
    font-size: 1.5em;
    font-weight: 800;
    margin-bottom: 10px;
`

const Navbar = () => {

    const [showInsp, setShowInsp] = useState(false)

    return (<>
        <NavWrapperLeft>
            <Button onClick={() => null} content={<>Sign up for Email list<MdEmail /></>} />
        </NavWrapperLeft>
        <NavWrapper>
            <Button onClick={() => setShowInsp(!showInsp)} content={<>Inspiration<MdOutlineLightbulb/></>}/>
            {showInsp && <Inspiration>
                <H>Inspiration</H>
                According to the UN, women are affected the most by climate-based natural disasters, which worsens gender inequalities and leave women susceptible to higher rates of malnutrition, violence, and more. Nonetheless, even as individuals, we can take small steps towards mitigating climate change, including picking eco-friendly products to buy and use. Unfortunately, most consumers remain unaware of tens of product offerings that aim to accomplish this, largely because the most popular ecommerce platforms often prioritize a product’s popularity or price, without much consideration to sustainability and other company practices (gender equality, ethical sourcing, etc.). That’s why we decided to create EcoPower, a tool that collates products that support these values, allowing consumers to make informed decisions on the brands they support based on how they empower marginalized communities and support sustainability.
                </Inspiration>}
        </NavWrapper>
    </>)
}

export default Navbar