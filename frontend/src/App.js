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
        this.hideIFrameHandle = this.hideIFrame.bind(this);
    }

    updateCurrentId(id)
    {
        this.setState({
            currentID : id
        });
    }

    insertCallback(value)
    {
        this.setState({
            currentID: this.state.currentID,
            insert: value
        });
    }

    hideIFrame()
    {
        var elem = document.getElementById("powerbi_div");
        elem.style.display = 'none';
    }

    render()
    {
        return (
            <Router>
                <div className="App">
                    <CssBaseline/>
                    <Container maxWidth="lg"  alignContent={'center'}>
                        <Grid container spacing={4} >
                            <Grid item xs={12}>
                                <Header name={"Marius"} />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} justify={'center'} alignItems={'stretch'} direction="row">
                            <Grid item lg={9} >
                                <Switch>
                                    <Route exact path="/">
                                        <Pupils size={2} idHandler={this.updateCurrentId} />
                                    </Route>

                                    <Route exact path="/user" >
                                        <User id={this.state.currentID} insertHandler={this.insertCallback} onClick={this.hideIFrameHandle} />
                                    </Route>

                                    <Route exact path="/user/insert" >
                                        <BNInput id={this.state.currentID} />
                                    </Route>
                                </Switch>
                            </Grid>
                            <Grid item lg={3}>
                                <List style={{background: "#fff"}}>
                                    <h2>Termine</h2>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <AccessAlarms />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="2. Prognose fällig" secondary="9. Jan 2019" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <AccessAlarms />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="3. Prognose fällig" secondary="7. Jan 2019" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <AccessAlarms />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="4. Prognose fällig" secondary="20. July 2019" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <AccessAlarms />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="5. Prognose fällig" secondary="14. August 2019" />
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>

                        <div id={"powerbi_div"}>
                            <Grid container spacing={10} justify={'center'}>
                                <Grid item lg={12}>
                                    <iframe width="100%" height="720px"
                                            src="https://app.powerbi.com/view?r=eyJrIjoiMDY2YzVkNzktMmViNi00NTMwLWEyMDEtM2ViMDliMTVjYjE0IiwidCI6IjIxNjg0NGRjLTljOTAtNDk0OS04ZTRiLTU4ZWEyZDJjM2RiZSIsImMiOjh9"
                                            frameBorder="0" allowFullScreen="true"></iframe>
                                </Grid>
                            </Grid>
                        </div>

                    </Container>
                </div>
            </Router>
        );
    }
}

export default App;
