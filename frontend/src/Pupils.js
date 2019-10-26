import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Pupil from './Pupil';

import {
    Link,
} from "react-router-dom";

class Pupils extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            users: [ {id : 1, name : "Test1"},
                     {id : 1, name : "Test1"},
                     {id : 1, name : "Test1"},
                     {id : 1, name : "Test1"},
                     {id : 1, name : "Test1"},
                   ]
        };
    }

    componentDidMount()
    {
        /*fetch(new URL('init', "HIER MUSS EIN API CALL REIN")).then(res => res.json())
            .then((data => this.setState({
                                    users: data.users
                                    })
            ));*/
    }

    componentWillUnmount()
    {}

    render()
    {
        return (
            <Grid container spacing={2}>
                {this.state.users.map(values => (
                    <Grid item lg={this.props.size}>
                        <Pupil id={values.id} name={values.name} />
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default Pupils;