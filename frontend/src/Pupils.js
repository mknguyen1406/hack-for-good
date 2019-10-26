import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {Link} from 'react-router-dom';

const API_URL = "http://127.0.0.1:5000/pupils?fellow_id=1";

class Pupils extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };


    }

    componentDidMount() {
        fetch(new URL(API_URL))
            .then(res => res.json())
            .then(data => this.setState({users: data}));
    }


    render()
    {
        return (
            <Grid container spacing={2}>
                <Grid item lg={12}>
                    <h1>Schüler</h1>
                </Grid>
                {this.state.users.map(value => (
                    <Grid item lg={this.props.size}>
                        <Link to="/user" onClick={() => this.props.idHandler(value.ID)}>
                            <Card>
                                <p> {value.Nickname} </p>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default Pupils;