/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes";
class App extends Component {
    render() {
        return (
            <Router>
                <Routes />
            </Router>

        );
    }
}
export default App;
