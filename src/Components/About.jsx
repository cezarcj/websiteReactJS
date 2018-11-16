import React, {Component} from "react";
import {MyContext} from "./App";
import Avatar from "@material-ui/core/es/Avatar/Avatar";

export default class About extends Component {
	render() {
		return (
			<MyContext.Consumer>
				{state => {
					return (
						<div>
							<h2>About Me</h2>
							<p>IT specialist with 4+ years of professional experience in information security and digital
								forensics.
								Expert and highly familiar with a wide
								variety of security, engineering, networking, and operating system software. Possess an Associate
								Degree
								in Information Security and Digital
								Forensics</p>
							<span/><span/><span/>
							<p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>

							<p>First name : {state.firstName}</p>
							<p>Last name :{state.lastName}</p>
							<p>Age :{state.age}</p>
							<p>Address :{state.address}</p>
							<p>E-mail :{state.email}</p>
							<p>Phone Number :{state.number}</p>
							<p>Freelance :{state.freelance.toString()}</p>
							<img src={state.image}/>
						</div>

					)
				}}
			</MyContext.Consumer>
		);
	}
};