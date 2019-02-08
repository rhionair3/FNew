import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { mainMenu } from '../../Components/mainMenu';
import {blue, red, lime, amber, grey} from '@material-ui/core/colors/';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    minHeight:48
  },
  toolbarIcon: {
    minHeight: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 10,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 48,
    [theme.breakpoints.up('sm')]: {
      width: 48,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
  cardLeft: {
    minHeight:80
  },
  cardRight: {
    minHeight:80
  },
  cardPrimary: {
    backgroundColor: blue[500]
  },
  cardSecondary: {
    backgroundColor: grey[500]
  },
  cardSuccess: {
    backgroundColor: lime[600]
  },
  cardDanger: {
    backgroundColor: red[500]
  },
  cardWarning: {
    backgroundColor: amber[700]
  },
  cardTextWhite: {
    color: grey[50]
  }
});
const status = [{
    value: 'INDENT',
    label: 'INDENT',
  },
  {
    value: 'BATAL',
    label: 'BATAL',
  },
  {
    value: 'TERSEDIA',
    label: 'TERSEDIA',
  },
  {
    value: 'RUSAK',
    label: 'RUSAK',
  },
  {
    value: 'TERKIRIM',
    label: 'TERKIRIM',
  }
];
class Cartform extends React.Component {
  state = {
    open: true,
    id: "", code: "", status: "", dateCreated: "", createdBy: "", description: "", name: "", updatedBy: "",
    params: {},
    url: "",
    request: {}
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      fetch('http://3.1.84.35:8080/franchise/api/v1/cart/show?id=' + this.props.match.params.id)
        .then(response => {
          return response.json();
        }).then(result => {
          console.log(result);
          this.setState({
            id: result.data.id,
            code: result.data.code,
            status: result.data.status,
            dateCreated: result.data.dateCreated,
            createdBy: result.data.createdBy,
            description: result.data.description,
            name: result.data.name,
            updatedBy: result.data.updatedBy
          });
        });
    } else {
      this.setState({
        id: "", code: "", status: "", dateCreated: "", createdBy: "", description: "", name: "", updatedBy: ""
      });
    }
  }
  
  handleChange = () => event => {
	  const state = this.state;
	  state[event.target.name] = event.target.value;
    this.setState(state);
    // console.log(event.target.name);
  }
  handleSubmit = () => {
    if (this.state.id != null) {
      this.setState({ params : {
                          id: this.state.id,
                          code: this.state.code,
                          status: this.state.status,
                          dateCreated: this.state.dateCreated,
                          createdBy: this.state.createdBy,
                          description: this.state.description,
                          name: this.state.name,
                          updatedBy: this.state.updatedBy
                        }
                    });
      this.setState({ url : 'http://3.1.84.35:8080/franchise/api/v1/cart/edit'});
    } else {
      this.setState({ params : {
                          code: this.state.code,
                          status: this.state.status,
                          dateCreated: this.state.dateCreated,
                          createdBy: this.state.createdBy,
                          description: this.state.description,
                          name: this.state.name,
                          updatedBy: this.state.updatedBy
                        }
                    });
      this.setState({ url : 'http://3.1.84.35:8080/franchise/api/v1/cart/create'});
    }
    var formData = new FormData();

    for (var k in this.state.params) {
      formData.append(k, this.state.params[k]);
    }

    this.setState({
      request : {
        method : 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: formData
      }
    })
	  fetch(this.state.url, this.state.request).then(response => {
      console.log(response);
      if(response.status === 200) {
        if (this.state.id != null) {
          alert("Data update successfully.");
        } else {
          alert("Data Insert successfully.");
        }
      }
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={classNames(classes.appBar, this.state.open && classes.appBarShift)} >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
            Form Gerobak
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainMenu}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography variant="h4" gutterBottom component="h2">
            Formcart
          </Typography>
          <form className={classes.container} onSubmit={this.handleSubmit}>
          <TextField
              id="cartID"
              name="id"
              value={this.state.id}
              type="hidden"
            />
            <TextField
              id="code"
              label="Cart Code"
              name="code"
              className={classNames(classes.textField, classes.dense)}
              value={this.state.code}
              onChange={this.handleChange('code')}
              fullWidth
              margin="dense"
              variant="outlined"
            />
            <TextField
              id="name"
              label="Name"
              name="name"
              className={classNames(classes.textField, classes.dense)}
              value={this.state.name}
              onChange={this.handleChange('name')}
              fullWidth
              margin="dense"
              variant="outlined"
            />
            <TextField
              id="description"
              label="Cart Description"
              name="description"
              className={classNames(classes.textField, classes.dense)}
              value={this.state.description}
              onChange={this.handleChange('description')}
              fullWidth
              margin="dense"
              variant="outlined"
            />
            <TextField
              id = "dateCreated"
              label="Date Created"
              name="dateCreated"
              className={classNames(classes.textField, classes.dense)}
              value={this.state.dateCreated}
              onChange={this.handleChange('dateCreated')}
              fullWidth
              margin="dense"
              variant="outlined"
            />
            <TextField
              id = "createdBy"
              label="Created By"
              name="createdBy"
              className={classNames(classes.textField, classes.dense)}
              value={this.state.createdBy}
              onChange={this.handleChange('createdBy')}
              fullWidth
              margin="dense"
              variant="outlined"
            />
            <TextField
              id="updatedBy"
              label="Updated By"
              name="updatedBy"
              className={classNames(classes.textField, classes.dense)}
              value={this.state.updatedBy}
              onChange={this.handleChange('updatedBy')}
              fullWidth
              margin="dense"
              variant="outlined"
            />
            <TextField
              id="status"
              name="status"
              select
              label="Select Cart Status"
              value={this.state.status}
              onChange={this.handleChange('status')}
              fullWidth
              className={classNames(classes.textField, classes.dense)}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="dense"
              variant="outlined"
            >
              {status.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <Button type="submit" variant="outlined" color="primary" className={classes.button} fullWidth>
              SAVE
            </Button>
          </form>
        </main>
      </div>
    );
  }
}

Cartform.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cartform);