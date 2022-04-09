import React from "react";
import styled from "styled-components"

const ButtonWrapper = styled.div`
    border: 1px solid black;
`

const Button = ( props: { name: string } ) => {
    return (
        <ButtonWrapper>
            This is a button {props.name}
        </ButtonWrapper>
    )
}

export default Button