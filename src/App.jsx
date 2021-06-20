import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/home/Home";
import Index from "./pages/timeline";
import Info from "./Info";
import Navbar from "./components/navbar/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path ="/" component={Home} />
                <Route exact path ="/timeline" component={Index} />
                <Route exact path ="/info" component={Info} />
                <Route component={Error} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;