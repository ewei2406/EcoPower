import React from "react";
import ItemType from "./ItemType";
import Item from "./Item";
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ItemList = ({ items }: {items: ItemType[]}) => {
    return (
        <Wrapper>
            {items.map(i => <Item item={i} key={i.name}/>)}
        </Wrapper>
    )
}

export default ItemList