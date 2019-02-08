import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';

const styles = ({
    menuListList: {
        paddingLeft: 12,
        paddingRight: 12,
    }
});

export const mainMenu = (
  <div>
    <ListItem button style={styles.menuListList} component="a" href="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Beranda" />
    </ListItem>
    <ListItem button style={styles.menuListList} component="a" href="/franchise">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Pemilik Franchise" />
    </ListItem>
    <ListItem button style={styles.menuListList} component="a" href="/cart">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Gerobak" />
    </ListItem>
    <ListItem button style={styles.menuListList} component="a" href="/chef">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Koki" />
    </ListItem>
    <ListItem button style={styles.menuListList} component="a" href="/user">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Pengguna" />
    </ListItem><ListItem button style={styles.menuListList} component="a" href="/login">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);