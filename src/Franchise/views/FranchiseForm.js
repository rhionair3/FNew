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
import { mainMenu } from '../../Components/mainMenu';
import {blue, red, lime, amber, grey} from '@material-ui/core/colors/';
import { FormRegister } from '../components/FormRegister';

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
    value: 'ACTIVE',
    label: 'ACTIVE',
  },
  {
    value: 'INACTIVE',
    label: 'INACTIVE',
  },
  {
    value: 'ONPROGRESS',
    label: 'ON PROGRESS',
  },
  {
    value: 'READY',
    label: 'READY',
  }
];

class FranchiseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      id: "", name:"", address:"", mobileNo: "", status: "",
      dataFranchise : {}
    };
  }
  componentDidMount() {
    fetch('http://3.1.84.35:8080/franchise/api/v1/franchise/show?id=' + this.props.match.params.id)
      .then(response => {
        return response.json();
      }).then(result => {
        // console.log(result);
        this.setState({
          id:result.data.id,
          name: result.data.name,
          address: result.data.address,
          mobileNo: result.data.mobileNo,
          status: result.data.status,
          dataFranchise: result.data
        });
      });
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  
  handleChange = () => event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
    // console.log(event.target.name);
  }
  handleSubmit = () => {
	  fetch('http://3.1.84.35:8080/api/v1/franchise/edit', {
			method: 'POST',
			body: JSON.stringify({
					id:this.state.id,
          name: this.state.name,
          address: this.state.address,
          mobileNo: this.state.mobileNo,
          status: this.state.status,

			}),
			headers: {
							"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				if(response.status === 200) {
					alert("Website update successfully.");
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
              Franchise Form
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
          <FormRegister dataFranchise={this.state.dataFranchise}/>
        </main>
      </div>
    );
  }
}

FranchiseForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FranchiseForm);