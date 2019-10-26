import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Pupils from './Pupils';
import Header from './Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import User from './User';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AccessAlarms from '@material-ui/icons/AccessAlarms';
import BNInput from './BNInput';

class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            currentID : -1,
            insert : -1
        };
        this.updateCurrentId = this.updateCurrentId.bind(this);
        this.insertCallback = this.insertCallback.bind(this);
    }

    updateCurrentId(id)
    {
        this.setState({
            currentID : id
        });
    }

    insertCallback()
    {
        console.log(this.state.insert);
        this.state.insert = 1
        console.log(this.state.insert);
    }

    render()
    {
        return (
            <Router>
                <div className="App">
                    <CssBaseline/>
                    <Container maxWidth="lg">
                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <Header name={"Marius"}/>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item lg={9} style={{background: "#fff"}}>
                                <Switch>
                                    <Route exact path="/">
                                        <Pupils size={3} idHandler={this.updateCurrentId} />
                                    </Route>

                                    <Route exact path="/user" >
                                        <User id={this.state.currentID} insertHandler={this.insertCallback}/>
                                    </Route>

                                    <Route exact path="/user/insert" >
                                        <BNInput id={this.state.currentID} />
                                    </Route>
                                </Switch>
                            </Grid>
                            <Grid item lg={3}>
                                <List style={{background: "#fff", width: "100%", maxWidth: "360px"}}>
                                    <h2>Termine</h2>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <AccessAlarms />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="AccessAlarms" secondary="9. Jan 2019" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <AccessAlarms />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="AccessAlarms" secondary="7. Jan 2019" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <AccessAlarms />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="AccessAlarms" secondary="20. July 2019" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <AccessAlarms />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="AccessAlarms" secondary="14. August 2019" />
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Router>
        );
    }
}

export default App;
