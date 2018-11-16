import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dropzone from "react-dropzone";
import {Persist} from 'react-persist'
import Button from '@material-ui/core/Button';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import {MyContext} from "./App";


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
	dense: {
		marginTop: 19,
	},
	menu: {
		width: 200,
	},
	button: {
		margin: theme.spacing.unit,
	},
	input: {
		display: 'none',
	},
	iOSSwitchBase: {
		'&$iOSChecked': {
			color: theme.palette.common.white,
			'& + $iOSBar': {
				backgroundColor: '#52d869',
			},
		},
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
			easing: theme.transitions.easing.sharp,
		}),
	},
	iOSChecked: {
		transform: 'translateX(15px)',
		'& + $iOSBar': {
			opacity: 1,
			border: 'none',
		},
	},
	iOSBar: {
		borderRadius: 13,
		width: 42,
		height: 26,
		marginTop: -13,
		marginLeft: -21,
		border: 'solid 1px',
		borderColor: theme.palette.grey[400],
		backgroundColor: theme.palette.grey[50],
		opacity: 1,
		transition: theme.transitions.create(['background-color', 'border']),
	},
	iOSIcon: {
		width: 24,
		height: 24,
	},
	iOSIconChecked: {
		boxShadow: theme.shadows[1],
	},
});

class TextFields extends React.Component {
	constructor(props) {
		super(props);
		this.state =
			{
				firstname: '',
				lastname: '',
				age: '',
				address: '',
				email: '',
				number: '',
				freelance: false,
				image: null,
				errors: []
			};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event, property) {
		this.setState({[property]: event.target.value});
	}

	handleSubmit(event, state) {
		console.log("formularz", this.state);

		const errors = [];
		if (!this.state.firstname || this.state.firstname.length === 0) {
			errors.push("First name is required");
		}

		if (!this.state.lastname || this.state.lastname.length === 0) {
			errors.push("Last name is required");
		}

		if (!this.state.email || this.state.email.length === 0) {
			errors.push("Email name is required");
		} else if (this.state.email.length > 0 && !emailRegex.test(this.state.email.toLowerCase())) {
			errors.push("Email format is wrong");
		}
		if (errors.length === 0) {
			state.updateContext({
				firstName: this.state.firstname,
				lastName: this.state.lastname,
				age: this.state.age,
				address: this.state.address,
				email: this.state.email,
				number: this.state.number,
				image: this.state.image,
				freelance: this.state.freelance,
			});
		}
		this.setState({errors});
		event.preventDefault();

	}

	handleImageChange(evt) {
		console.log(evt);
		this.setState({image: URL.createObjectURL(evt[0])})
	}

	/*
	 <TextField
	 error
	 id="standard-error"
	 label="Error"
	 defaultValue="Hello World"
	 className={classes.textField}
	 margin="normal"
	 />
	 <TextField
	 id="standard-dense"
	 label="Dense"
	 className={classNames(classes.textField, classes.dense)}
	 margin="dense"
	 />
	 <TextField
	 id="standard-number"
	 label="Number"
	 value={this.state.age}
	 onChange={this.handleChange('age')}
	 type="number"
	 className={classes.textField}
	 InputLabelProps={{
	 shrink: true,
	 }}
	 margin="normal"
	 />*/


	render() {
		const {classes} = this.props;
		console.log(this.state);
		return (
			<MyContext.Consumer>
				{state => {
					return (
						<form className={classes.container} onSubmit={(e) => this.handleSubmit(e, state)}>
							<TextField
								id="fname"
								label="First Name"
								className={classNames(classes.textField, classes.dense)}
								margin="dense"
								value={this.state.firstname}
								type="text"
								onChange={(evt) => this.handleChange(evt, "firstname")}
							/>
							<TextField
								id="lname"
								label="Last Name"
								value={this.state.lastname}
								onChange={(evt) => this.handleChange(evt, "lastname")}
								className={classNames(classes.textField, classes.dense)}
								margin="dense"
								type="text"
							/>
							<TextField
								id="age"
								label="Age"
								value={this.state.age}
								onChange={(evt) => this.handleChange(evt, "age")}
								type="number"
								className={classNames(classes.textField, classes.dense)}
								margin="dense"
							/>
							<TextField
								id="address"
								label="Address"
								value={this.state.address}
								onChange={(evt) => this.handleChange(evt, "address")}
								className={classNames(classes.textField, classes.dense)}
								margin="dense"
								type="text"
							/>
							<TextField
								id="email"
								label="E-mail"
								value={this.state.email}
								onChange={(evt) => this.handleChange(evt, "email")}
								className={classNames(classes.textField, classes.dense)}
								margin="dense"
								type="text"
							/>
							<TextField
								id="phone"
								label="Phone"
								value={this.state.number}
								onChange={(evt) => this.handleChange(evt, "number")}
								className={classNames(classes.textField, classes.dense)}
								margin="dense"
								type="text"
							/>
							<Dropzone accept="image/jpeg,image/jpg,image/tiff,image/gif/,image/png"
									  onDropAccepted={(evt) => this.handleImageChange(evt)}>
								{this.state.image && <img style={{width: "196px", height: "196px"}} src={this.state.image}/>}
							</Dropzone>
							<Button type="submit" className={classes.button}>Submit</Button>
							<FormGroup row>
								<FormControlLabel
									control={
										<Switch
											id="freelance"
											name="freelance"
											classes={{
												switchBase: classes.iOSSwitchBase,
												bar: classes.iOSBar,
												icon: classes.iOSIcon,
												iconChecked: classes.iOSIconChecked,
												checked: classes.iOSChecked,
											}}
											disableRipple
											checked={this.state.freelance}
											onChange={(evt) => this.setState({freelance: evt.target.checked})}
										/>
									}
									label="Freelance"
								/>
							</FormGroup>
							<Persist name="signup-form" data={this.state} debounce={500} onMount={data => this.setState(data)}/>
							{this.state.errors.length > 0 &&
							<div>
								{this.state.errors.map((e, index) => <p style={{color: "red"}}>{e}</p>)}
							</div>
							}
						</form>
					)
				}}
			</MyContext.Consumer>
		);
	}
}

TextFields.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);