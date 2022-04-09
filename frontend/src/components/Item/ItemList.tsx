import React from "react";
import ItemType from "./ItemType";
import Item from "./Item";
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const InfoDiv = styled.div`
    width: 600px;
    text-align: center;
    color: ${p => p.theme.complementColor};
`

const ItemList = ({ items }: {items: ItemType[]}) => {
    return (
        <Wrapper>
            {items.map(i => <Item item={i} key={i.name}/>)}

            {items.length === 0 && <InfoDiv>
                Finding products that are sustainable, equitable, and support marginalized communities is incredibly simple with our tool. Enter keywords in the search bar relating to the product you want to buy (soap, jeans, sunscreen, etc), and our search engine will pull up a list of products whose brands most support our core ideas of sustainability and empowerment. Each search result will list the product’s score out of 100 rated based on our proprietary formula for calculating alignment with the aforementioned values as well as the general quality of the product. Additionally, each item also lists price per unit, an image, and a link to purchase the product.
                </InfoDiv>}
        </Wrapper>
    )
}

export default ItemList