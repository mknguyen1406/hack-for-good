import React from 'react';
import Grid from "@material-ui/core/Grid";
import Pupil from './Pupil';

class Pupils extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount()
    {
        this.setState({
            users: [
                {"id" : 1, "name" : "Test1"},
                {"id" : 1, "name" : "Test1"},
                {"id" : 1, "name" : "Test1"},
                {"id" : 1, "name" : "Test1"},
                {"id" : 1, "name" : "Test1"},
            ]
        });
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
                <Grid item lg={12}>
                    <h1>Schüler</h1>
                </Grid>
                {this.state.users.map(values => (
                    <Grid item lg={this.props.size}>
                        <Pupil name={values.name}/>
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default Pupils;