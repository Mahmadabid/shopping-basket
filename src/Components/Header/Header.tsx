import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../Slice/ThemeSlice';
import { State } from '../../Global/Types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100vw',
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
    color: {
      backgroundColor: 'rgb(20, 117, 121)',
    }
  }),
);

const Header = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const islit = useSelector((state: State) => state.themes.value );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={islit? '': classes.color}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shopping Basket
          </Typography>
          <IconButton onClick={() => {
              dispatch(setTheme())
          }} color="inherit">
            {islit ? <Brightness7Icon />: <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;