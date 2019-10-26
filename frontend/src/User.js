import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

const API_URL = "http://127.0.0.1:5000/pupils?fellow_id=1";

class User extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            user: "",
            id: -1
        };
    }

    setUserProps(data)
    {
        let i;
        for (i = 0; i < data.length; i++)
        {
            if (data[i].ID === this.props.id)
            {
                this.setState({user: data[i]});
            }
        }
    }

    componentDidMount()
    {
        // wird auch bei einem reload ausgeführt!
        // wobei bei einem reload die props.id auf -1 gesetzt wird
        // und state.user.ID ist undefined
        fetch(new URL(API_URL))
            .then(res => res.json())
            .then(data => this.setUserProps(data));
    }

    render()
    {
        return (
            <Grid container spacing={4}>
                <Grid item lg={12}>
                    <h1>{this.state.user.Nickname}</h1>
                </Grid>

                <Grid item lg={3}>
                    <Card>
                    <p>Stadt: {this.state.user.City}</p>
                    </Card>
                </Grid>

                <Grid item lg={3}>
                    <Card>
                    <p>Schule: {this.state.user.School} </p>
                    </Card>
                </Grid>

                <Grid item lg={3}>
                    <Card>
                    <p>Klasse: {this.state.user.Class}</p>
                    </Card>
                </Grid>

                <Grid item lg={3}>
                    <Link to="/user/insert" onClick={() => this.props.insertHandler(1)}>
                        <Fab color="primary">
                            <AddIcon />
                        </Fab>
                    </Link>
                </Grid>



            </Grid>
        );
    }

}

export default User;