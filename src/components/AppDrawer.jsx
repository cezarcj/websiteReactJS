import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Routes from "./navigation/Routes";
import {applicationHistory} from "./App"
import Button from "@material-ui/core/es/Button/Button";
import {AccountCircle} from "@material-ui/icons/index.es";
import {MyContext} from "./App";
import Avatar from "@material-ui/core/es/Avatar/Avatar";

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
	},
	menuButton: {
		marginRight: 20,
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
	menuButtonRight: {
		// alignSelf: "flex-end"
	}
});


const routes = [
	{path: "/about", name: "About"}, /*info */
	{path: "/form", name: "Form"},
	{path: "/portfolio", name: "Portfolio"}, /* camera_alt */
];


class AppDrawer extends React.Component {

	state = {
		mobileOpen: false,
	};

	handleDrawerToggle = () => {
		this.setState(state => ({mobileOpen: !state.mobileOpen}));
	};

	render() {
		const {classes} = this.props;

		const drawer = (
			<div>
				<div className={classes.toolbar}/>
				<Divider/>
			</div>
		);

		return (
			<MyContext.Consumer>
				{state => {
					return (
						<div className={classes.root}>
							<CssBaseline/>
							<AppBar position="fixed" className={classes.appBar}>
								<Toolbar style={{flexDirection: "row-reverse"}}>
									<IconButton
										color="inherit"
										aria-label="Open drawer"
										onClick={this.handleDrawerToggle}
										className={classes.menuButton}
									>
										<MenuIcon/>
									</IconButton>
									<IconButton
										aria-haspopup="true"
										color="inherit">
										{state.image ?
											<Avatar src={state.image} className={classes.avatar}/> :
											<AccountCircle />
										}
									</IconButton>
									{routes.map((route, index) => {
										return (
											<Button key={index}
													color="inherit"
													className={classes.menuButtonRight}
													onClick={() => applicationHistory.replace(route.path)}>{route.name}
											</Button>
										)
									})}
								</Toolbar>
							</AppBar>
							<nav className={classes.drawer}>
								<Hidden smUp implementation="css">
									<Drawer
										container={this.props.container}
										variant="temporary"
										anchor={'left'}
										open={this.state.mobileOpen}
										onClose={this.handleDrawerToggle}
										classes={{paper: classes.drawerPaper,}} ModalProps={{keepMounted: true}}>
										{drawer}
									</Drawer>
								</Hidden>
								<Hidden xsDown implementation="css">
									<Drawer
										classes={{paper: classes.drawerPaper}} variant="permanent" open>
										{drawer}
									</Drawer>
								</Hidden>
							</nav>
							<main className={classes.content}>
								<div className={classes.toolbar}/>
								<Routes/>
							</main>
						</div>
					)
				}}
			</MyContext.Consumer>
		);
	}
}

export default withStyles(styles, {withTheme: true})(AppDrawer);