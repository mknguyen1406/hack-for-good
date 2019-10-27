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
import { styled } from '@material-ui/core/styles';


const MyTextField = styled(TextField)({
    float: "left",
    marginTop: "0",
    width: "200px",
    textAlign: "left"
});

const MySelect = styled(Select)({
    width: "200px",
    textAlign: "left"
});


const label = {
    float: "left",
    textAlign: "left",
    marginRight: "10px"
};

const errorStyle = {
    color: "#db2269",
    fontSize: "8pt",
    position: "absolute"
};


class BNInputComp extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        if (this.props.type === 'freetext') {
            return <tr>
                <td><span style={label}>{this.props.name}</span></td>
                <td><MyTextField
                    id={this.props.name}
                    onChange={(event => this.props.handleChange(this.props.name, event.target.value))}
                    margin="normal"
                    value={this.props.value}
                /></td>
                <td>{this.props.activateErrors && this.props.value === '' && <span style={errorStyle}>Pflichtfeld</span>}</td>
            </tr>
        } if (this.props.type === 'number') {
            return <tr>
                <td><span style={label}>{this.props.name}</span></td>
                <td><MyTextField
                    id={this.props.name}
                    type="number"
                    onChange={(event => this.props.handleChange(this.props.name, event.target.value))}
                    margin="normal"
                    value={this.props.value}
                /></td>
                <td>{this.props.activateErrors && this.props.value === '' && <span style={errorStyle}>Pflichtfeld</span>}</td>
            </tr>
        } else if (this.props.type === 'select') {
            return <tr>
                <td><span style={label}>{this.props.name}</span></td>
                <td><MySelect inputProps={{value: this.props.value}} onChange={(event => this.props.handleChange(this.props.name, event.target.value))}>
                    {this.props.options.map((name) =>
                    <MenuItem key={name} value={name}>{name}</MenuItem>
                    )}
                </MySelect>
                </td>
                <td>{this.props.activateErrors && this.props.value === '' && <span style={errorStyle}>Pflichtfeld</span>}</td>
            </tr>
        }
    }
}


export default BNInputComp;