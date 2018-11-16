import React from "react";
import {Redirect, Switch} from "react-router";
import {Route} from "react-router-dom";
import Form from "../Form2";
import About from "../About";
import Portfolio from "../Portfolio";

export default class Routes extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/Form" component={Form}/>
                <Route path="/About" component={About}/>
                <Route path="/Portfolio" component={Portfolio}/>
                <Route path="/" component={About}/>
                <Redirect to="/"/>
            </Switch>
        );
    }
}