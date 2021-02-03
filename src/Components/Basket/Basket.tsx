import React from "react"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import {
    List,
    ListItem,
    Divider,
    ListItemText,
    ListItemAvatar,
    ListItemSecondaryAction,
    IconButton,
    Avatar,
    Typography
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import { useDispatch, useSelector } from "react-redux"
import { ProductItem, State } from "../../Global/Types"
import { remove } from "../../Slice/BasketSlice"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
        },
        inline: {
            display: "inline"
        },
        listItem: {
            padding: theme.spacing(1, 0),
            justifyContent: "flex-end"
        },
        total: {
            fontWeight: theme.typography.fontWeightBold,
            fontSize: theme.typography.fontSize * 2,
        },
        dark: {
            color: 'white'
        }
    })
)

export const Basket = () => {
    const classes = useStyles({})
    const dispatch = useDispatch();
    const products = useSelector((state: State) => state.basket);
    const islit = useSelector((state: State) => state.themes.value);

    return (
        <>
            <Typography component="h2" variant="h6" color="primary" gutterBottom style={{ marginTop: '20px' }}>
                Shopping Basket
            </Typography>
            <Typography component="p" variant="body1">
                You have {products.filter(product => product.added).length} items in your basket
            </Typography>
            <List className={classes.root}>
                {products
                    .filter(product => product.added)
                    .map((product: ProductItem) => (
                        <div key={product.id} style={{ marginTop: '5px' }}>
                            <ListItem alignItems="flex-start" className="darkM">
                                <ListItemAvatar>
                                    <Avatar alt="Product" src={product.imageUrl} />
                                </ListItemAvatar>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <ListItemText style={{ color: 'black' }}>
                                        {product.title}
                                    </ListItemText>
                                    <ListItemText style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            &pound;{(product.price / 100).toFixed(2)}
                                        </Typography>
                                        <Typography
                                            component="span"
                                            color="textSecondary"
                                        >
                                            &nbsp; ― {product.description}
                                        </Typography>
                                    </ListItemText>
                                    <ListItemSecondaryAction>
                                        <IconButton
                                            edge="end"
                                            aria-label="delete"
                                            onClick={() => dispatch(remove({ id: product.id }))}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </div>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                    ))}
                <ListItem className={classes.listItem}>
                    <Typography variant="subtitle1" className={`${classes.total} ${islit ? null : classes.dark}`}>
                        &pound;
                        {(
                            products
                                .filter(product => product.added)
                                .reduce((acc, current) => (acc += current.price), 0) / 100
                        ).toFixed(2)}
                    </Typography>
                </ListItem>
            </List>
        </>
    );
}