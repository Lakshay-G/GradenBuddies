import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Timeline from "./Timeline";
import Info from "./Info";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
            <Route exact path ="/" component={Home} />
            <Route exact path ="/timeline" component={Timeline} />
            <Route exact path ="/info" component={Info} />
            <Route component={Error} />
            <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;