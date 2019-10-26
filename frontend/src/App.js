import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import 'react-tabs/style/react-tabs.css';
import Pupils from './Pupils';
import Header from './Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import User from './User';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="App">
                <CssBaseline />
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Header name={"Marius"}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item lg={9}>
                            <Switch>
                                <Route exact path="/">
                                    <Pupils size={3}/>
                                </Route>
                                <Route path="/user">
                                    <User id={1} />
                                </Route>
                            </Switch>
                        </Grid>
                        <Grid item lg={3}>
                            <h2>Termine</h2>
                            <ul>
                                <li>1. Termin</li>
                                <li>2. Termin</li>
                                <li>3. Termin</li>
                                <li>4. Termin</li>
                            </ul>
                        </Grid>
                    </Grid>


                </Container>
            </div>
        </Router>
    );
}

export default App;