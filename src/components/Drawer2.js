import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CakeIcon from '@material-ui/icons/Cake';
import AddIcon from '@material-ui/icons/Add';
import Media from 'react-media';
import ListIcon from '@material-ui/icons/List';
import IconButton from '@material-ui/core/IconButton';
import { ShoppingCart } from '@material-ui/icons';
import ReceiptIcon from '@material-ui/icons/Receipt';

import LocalShippingIcon from '@material-ui/icons/LocalShipping';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        { ['Logout'].map((text, index) => (
         <a style={{color:"black"}} href="/logout"> <ListItem button key={text} href="/logout">
           
            <ListItemIcon>{index % 2 === 0 ? <CakeIcon /> : <AddIcon />}</ListItemIcon>
            <ListItemText primary={text} />
            
          </ListItem>
          </a>
        ))
      }
      </List>
      <Divider />
      <List>
        { ['Productos'].map((text, index) => (
         <a style={{color:"black"}} href="/compra"> <ListItem button key={text} href="/compra">
           
            <ListItemIcon>{index % 2 === 0 ? <CakeIcon /> : <AddIcon />}</ListItemIcon>
            <ListItemText primary={text} />
            
          </ListItem>
          </a>
        ))
      }
      </List>
      <List>
        {['Shipping'].map((text, index) => (
        <a style={{color:"black"}}href="/shipping">  <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <LocalShippingIcon /> : <AddIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </a>
        ))}
      </List>
      <List>
        { ['Pedidos'].map((text, index) => (
         <a style={{color:"black"}} href="/pedidos"> <ListItem button key={text} href="/pedidos">
           
            <ListItemIcon>{index % 2 === 0 ? <ReceiptIcon /> : <AddIcon />}</ListItemIcon>
            <ListItemText primary={text} />
            
          </ListItem>
          </a>
        ))
      }
      </List>
      <List>
        { ['Cart'].map((text, index) => (
         <a style={{color:"black"}} href="/cart"> <ListItem button key={text} href="/cart">
           
            <ListItemIcon>{index % 2 === 0 ? <ShoppingCart /> : <AddIcon />}</ListItemIcon>
            <ListItemText primary={text} />
            
          </ListItem>
          </a>
        ))
      }
      </List>
    </div>
  );
  


  return (
    <Media query="(max-width: 991px)" render={() =>
      (
        <div style={{height:"7vh", alignSelf : "center"}}>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
          <IconButton aria-label="delete" className={classes.margin} onClick={toggleDrawer(anchor, true)} > 
          <ListIcon fontSize="large" />
          </IconButton>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      )}
    />
  );
}