/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './iu/NavBar'

class App extends Component {
    render() {
        return (
            <>
            <Router>
            <NavBar />
            <Switch>
                <Route path='/' exact />
            </Switch>
            </Router>
            </>
         

        );

    }
}
export default App