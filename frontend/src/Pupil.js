import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import {Link} from 'react-router-dom';

function Pupil(props)
{
    return (
            <Link to="/user">
                <Card>
                    <h1> {props.name} </h1>
                </Card>
            </Link>
    );
}

export default Pupil;