import React from "react"
import styled from "styled-components"
import ItemType from "./ItemType"

const Item = ({ item }: { item: ItemType }) => {
    return (
        <div>
            <img src={item.imageUrl} alt="" />
            {item.name}
            {item.score}
            <br />
            ${item.price / 100}
            <br />
            {item.description}
            {item.link}
        </div>
    )
}

export default Item