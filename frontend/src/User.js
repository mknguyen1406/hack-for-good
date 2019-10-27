import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const API_URL = "http://ec2-52-59-253-229.eu-central-1.compute.amazonaws.com:5000/pupils?fellow_id=1";

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
            .then(data => this.setUserProps(data)); // #B80014
    }

    render()
    {
        return (
            <Box component="div" style={{background: "white", width: "100%"}}>
                <Grid container spacing={0} alignItems="flex-start">
                    <Grid item lg={12}>
                        <h1>{this.state.user.Nickname}</h1>
                    </Grid>
                </Grid>

                <Grid container spacing={4} justify={'center'}>
                    <Grid item lg={3}>
                        <Card style={{height: '80px'}}>
                        <p>Stadt: {this.state.user.City}</p>
                        </Card>
                    </Grid>

                    <Grid item lg={3}>
                        <Card style={{height: '80px'}}>
                        <p>Schule: {this.state.user.School} </p>
                        </Card>
                    </Grid>

                    <Grid item lg={3}>
                        <Card style={{height: '80px'}}>
                        <p>Klasse: {this.state.user.Class}</p>
                        </Card>
                    </Grid>

                    <Grid item lg={1}>
                        <Link to="/user/insert" onClick={() => this.props.insertHandler(1)}>
                            <Tooltip title="Beobachtungsnotiz hinzufügen" aria-label="hinzufügen">
                                <Button variant="contained" color="primary" style={{position: 'absolute'}}>
                                    <AddIcon />
                                </Button>
                            </Tooltip>
                        </Link>
                    </Grid>

                </Grid>

                <Grid container spacing={10} justify={'center'}>
                    <Grid item lg={12}>
                        <iframe width="98%" height="530"
                                src="https://app.powerbi.com/view?r=eyJrIjoiMjhjNDc3NmEtYjhmNS00MTE3LWIzMmQtYzQyMTgxN2E4OGZlIiwidCI6IjIxNjg0NGRjLTljOTAtNDk0OS04ZTRiLTU4ZWEyZDJjM2RiZSIsImMiOjh9"
                                frameBorder="0" allowFullScreen="true"></iframe>
                    </Grid>
                </Grid>

            </Box>
        );
    }

}

export default User;