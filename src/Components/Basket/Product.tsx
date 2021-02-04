import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { ProductItem, State } from '../../Global/Types';
import { Card, Divider } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { add } from '../../Slice/BasketSlice';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        Grid: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        Card: {
            maxWidth: '300px',
            margin: '10px',
            border: '1px',
            borderColor: 'white',
        },
    }),
);

export function Product() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const products = useSelector((state: State) => state.basket);
    const islit = useSelector((state: State) => state.themes.value);
    let [bamount, setbamount] = useState(0);
    let [ramount, setramount] = useState(0);
    let [yamount, setyamount] = useState(0);

    return (
        <div className={classes.root}>
            <Grid className={classes.Grid} container spacing={3} style={{ marginTop: '20px' }}>
                {products.map((product: ProductItem) =>
                    <Card key={product.id} className={`${classes.Card} ${islit?'':'darks'}`} onClick={() => {
                        product.id==='123'?setbamount(bamount+=1):product.id==='789'?setramount(ramount+=1):setyamount(yamount+=1)
                        dispatch(add([product, product.id==='123'?bamount:product.id==='789'?ramount:yamount]))
                        }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={product.title}
                                height="200"
                                image={product.imageUrl}
                                title={product.title}
                            />
                            <CardContent>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="h3">
                                        £{(product.price / 100)}
                                    </Typography>
                                </div>
                                <Divider className={islit?'':'dividerTheme'}/>
                                <Typography variant="body2" color={islit?"textSecondary":'initial'} component="p">
                                    {product.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )}
            </Grid>
        </div>
    );
}