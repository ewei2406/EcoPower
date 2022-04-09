import React from "react";
import styled from "styled-components"

const ButtonWrapper = styled.div`
    padding: 10px;

    color: ${p => p.theme.invertedColor};
    background-color: ${p => p.theme.accentColor};
    font-family: ${p => p.theme.headingFont};

    cursor: pointer;
    border-radius: 10px;

    display: flex;
    align-items: center;
    gap: 5px;


    filter: drop-shadow(0 4px 8px #aaa);
    transition: 0.1s ease all;

    &:hover {
        transform: scale(1.04);
    }
`

const Button = ({ onClick, content }: { onClick: () => void, content: React.ReactElement}) => {
    return (
        <ButtonWrapper onClick={onClick}>
            {content}
        </ButtonWrapper>
    )
}

export default Button