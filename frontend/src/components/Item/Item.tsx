import React from "react"
import styled from "styled-components"
import Button from "../Button/Button"
import ItemType from "./ItemType"
import { FiLink } from "react-icons/fi"
import { TiImage } from "react-icons/ti"
import Scale from "./Scale"

const Wrapper = styled.div`
    border: 1px solid ${p => p.theme.complementColor};
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    padding-left: 200px;
    height: 200px;
    background-color: ${p => p.theme.invertedColor};
`

const ImgWrapper = styled.div(({ imgUrl }: { imgUrl: string }) => `
    background-image: url(${imgUrl});
    width: 200px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
`)

const ContentWrapper = styled.div`
    padding: 20px;
    width: 500px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    align-items: flex-start;
    height: 100%;
`

const Heading = styled.div`
    width: 300px;
    overflow: hidden;
    white-space: nowrap;
    font-family: ${p => p.theme.headingFont};
    font-weight: 800;
    font-size: 1.25em;
`

const Price = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-weight: 400;
    color: ${p => p.theme.complementColor};
    text-align: right;
    display: flex;
    align-items: center;
    gap: 10px;
`

const FallbackIcon = styled(TiImage)`
    position: absolute;
    left: 50px;
    top: 50px;
    font-size: 4.5em;
    color: ${p => p.theme.complementColor};
`

const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 20px;
`

const DescWrapper = styled.div`
    width: 100%;
    height: 50px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const Item = ({ item }: { item: ItemType }) => {
    return (
        <Wrapper>
            <FallbackIcon/>
            <ImgWrapper imgUrl={item.imageLink}></ImgWrapper>
            <ContentWrapper>
                <Heading>
                    {item.name}
                </Heading>
                <Price>
                    <Scale score={item.score} />
                    ${item.price / 100}
                </Price>
                <DescWrapper>{item.description}</DescWrapper>
                <ButtonWrapper>
                    <Button onClick={() => window.open(item.link, '_blank')} content={
                        <>Learn more <FiLink /></>
                    }/>
                </ButtonWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

export default Item