import React from 'react';
import App from "./App";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import styles from './App.css';
import BNInput from "./BNInput";



class BNInputComp extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        if (this.props.type === 'freetext') {
            return <tr>
                <td><span>{this.props.name}</span></td>
                <td><TextField
                    id={this.props.name}
                    onChange={(event => this.props.handleChange(this.props.name, event.target.value))}
                    margin="normal"
                    value={this.props.value}
                /></td>
            </tr>
        } if (this.props.type === 'number') {
            return <tr>
                <td><span>{this.props.name}</span></td>
                <td><TextField
                    id={this.props.name}
                    type="number"
                    onChange={(event => this.props.handleChange(this.props.name, event.target.value))}
                    margin="normal"
                    value={this.props.value}
                /></td>
            </tr>
        } else if (this.props.type === 'select') {
            return <tr>
                <td><span>{this.props.name}</span></td>
                <td><Select inputProps={{value: this.props.value}} onChange={(event => this.props.handleChange(this.props.name, event.target.value))} style={{minWidth: 200}}>
                    {this.props.options.map((name) =>
                    <MenuItem key={name} value={name}>{name}</MenuItem>
                    )}
                </Select>
                </td>
            </tr>
        }
    }
}


export default BNInputComp;