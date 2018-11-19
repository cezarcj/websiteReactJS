import React, {Component} from 'react';
import AppDrawer from "./AppDrawer";
import Divider from "@material-ui/core/Divider/Divider";
import Typography from "@material-ui/core/Typography/Typography";
import {createBrowserHistory} from "history";
import {Router} from "react-router";

export const applicationHistory = createBrowserHistory();


export const MyContext = React.createContext({});

class App extends Component {
	state = {
		firstName: "",
		lastName: "",
		age: "",
		address: "",
		email: "",
		number: "",
		image: null,
		freelance: false,
		updateContext: (data) => this.setState(data)
	};

	render() {
		return (
			<Router history={applicationHistory}>
				<div style={{height: "100vh", display: "flex", marginBottom: "30px"}}>
					<div style={{
						height: "30px",
						position: "fixed",
						bottom: 0,
						left: 0,
						right: 0,
						zIndex: 1300,
						backgroundColor: "white"
					}}>
						<Divider/>
						<Typography>Lorem ipsum</Typography>
					</div>
					<MyContext.Provider value={this.state}>
						<AppDrawer/>
					</MyContext.Provider>
				</div>
			</Router>
		);
	}
}

export default App;