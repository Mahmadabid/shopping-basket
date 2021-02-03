import React from "react"
import { Container, Box } from "@material-ui/core"
import { Basket } from "./Basket"
import { Product } from "./Product"

const ShoppingBasket = () => {
    return (
        <Container>
            <Box mt={5} mb={5}>
                <Product />
            </Box>
            <Box mt={5} mb={5}>
                <Basket />
            </Box>
        </Container>
    )
}

export default ShoppingBasket