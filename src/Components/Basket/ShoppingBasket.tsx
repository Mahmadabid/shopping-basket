import React from "react"
import { Container } from "@material-ui/core"
import { Basket } from "./Basket"
import { Product } from "./Product"

const ShoppingBasket = () => {
    return (
        <Container>
            <Product />
            <Basket />
        </Container>
    )
}

export default ShoppingBasket