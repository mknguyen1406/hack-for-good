import React from 'react';
import App from "./App";
import BNInputComp from "./BNInputComp";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import styles from './App.css';



class BNInput extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeComp = this.handleChangeComp.bind(this);

        this.choicesGeR = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        // TODO display elaborate category description of LKM
        this.choicesLKM = ['Stufe 1 (destruktiv)', 'Stufe 2 (apathisch)', 'Stufe 3 (zielgerichtet)', 'Stufe 4 (eigenmotiviert)', 'Stufe 5 (außergewöhnlich)'];
        this.choicesBinaryn = ['Ja', 'Nein'];   // TODO allow no selection (optional)

        this.mainSubjects = ['Mathe', 'Englisch', 'Deutsch', 'Weiteres'];
        this.verbalSkills = [{name: 'Hören', choices: this.choicesGeR}, {name: 'Sprechen', choices: this.choicesGeR}, {name: 'Schreiben', choices: this.choicesGeR}, {name: '(Vor-)Lesen', choices: this.choicesGeR}];
        this.socialBehavior = [{name: 'Selbstvertrauen', choices: this.choicesLKM}, {name: 'Arbeitet gerne mit anderen zusammen (Teamdenken)', choices: this.choicesLKM}, {name: 'Reflexionsfähigkeit', choices: this.choicesLKM} ,
            {name: 'ggf.: Hält Schul- und Klassen-/Gruppenregeln ein', choices: this.choicesBinaryn}, {name: 'ggf.: Ist hilfsbereit', choices: this.choicesBinaryn}, {name: 'ggf.: Löst Konflikte adäquat', choices: this.choicesBinaryn}];
        this.learningBehavior = [{name: 'Ist motiviert', choices: this.choicesLKM}, {name: 'Setzt sich eigene Lernziele', choices: this.choicesLKM}];
        this.parentsAbsences = ['Elternkontakt (Anzahl Kontaktpunkte: Telefonate, Gespräche etc.)', 'Fehlzeiten (Tage / Stunden… wichtig ist Einheitlichkeit)']
        this.future = ['hat an berufsorientierenden Maßnahmen teilgenommen (Häufigkeit + Art)'];
        this.prognosis = [{name: 'Prognose', choices: this.choicesLKM}];

        this.state = {};
        // initialize state with all
        this.mainSubjects.forEach(s => this.state[s] = '');
        this.verbalSkills.forEach(s => this.state[s.name] = '');
        this.socialBehavior.forEach(s => this.state[s.name] = '');
        this.learningBehavior.forEach(s => this.state[s.name] = '');
        this.state['date'] = 1;
    }

    handleChange(name, event) {

    }

    handleChangeComp(name, value) {
        this.setState({[name]: value});
    }

    render() {
        const titleMargin = {
            marginBlockStart: "20px",
            marginBlockEnd: "20px",
            float: "left"
        };
        const selectMargin = {
            marginBlockStart: "20px",
            marginBlockEnd: "20px",
            marginLeft: "10px"
        };
        // todo make more points of time selectable
        return (
            <Container maxWidth="sm">
                <div>
                <h2 style={titleMargin}>Neue Bewertung für Zeitpunkt </h2>
                <Select inputProps={{
                    value: this.state.date
                }} style={selectMargin} className={styles.title} onChange={e => this.handleChangeComp('date', e.target.value)}>
                    <MenuItem value={1}>1 | Beginn 1. SJ</MenuItem>
                    <MenuItem value={2}>2 | Halbjahr 1. SJ</MenuItem>
                    <MenuItem value={3}>3 | Ende 1. SJ/Anfang 2. SJ</MenuItem>
                    <MenuItem value={4}>4 | Halbjahr 2. SJ</MenuItem>
                    <MenuItem value={5}>5 | Ende 2. SJ</MenuItem>
                </Select>
                </div>

                <h3>Leistungen in den Hautpfächern</h3>
                <table><tbody>{this.mainSubjects.map((name) =>
                        <BNInputComp value={this.state[name]} name={name} type={"freetext"} handleChange={this.handleChangeComp}/>
                        )}</tbody></table>

                <h3>Sprachliche Kompetenz</h3>
                <table><tbody>{this.verbalSkills.map((el) =>
                    <BNInputComp value={this.state[el.name]} name={el.name} type={"select"} options={el.choices} handleChange={this.handleChangeComp}/>
                )}</tbody></table>

                <h3>Handlungskompetenzen / Lernkulturmatrix (LKM)</h3>
                <h4>Sozialverhalten</h4>
                <table><tbody>{this.socialBehavior.map((el) =>
                    <BNInputComp value={this.state[el.name]} name={el.name} type={"select"} options={el.choices} handleChange={this.handleChangeComp}/>
                )}</tbody></table>

                <h4>Lern- und Arbeitsverhalten</h4>
                <table><tbody>{this.future.map((el) =>
                    <BNInputComp value={this.state[el]} name={el} type={"freetext"} handleChange={this.handleChangeComp}/>
                )}</tbody></table>

                <h3>Elternarbeit & Fehlzeiten</h3>
                <table><tbody>{this.parentsAbsences.map((el) =>
                    <BNInputComp value={this.state[el]} name={el} type={"freetext"} handleChange={this.handleChangeComp}/>
                )}</tbody></table>

                <h3>Zukunft</h3>
                <table><tbody>{this.future.map((el) =>
                    <BNInputComp value={this.state[el]} name={el} type={"freetext"} handleChange={this.handleChangeComp}/>
                )}</tbody></table>

                <h3>Sicherer Übergang | Übergangsprognose</h3>
                <table><tbody>{this.prognosis.map((el) =>
                    <BNInputComp value={this.state[el.name]} name={el.name} type={"select"} options={el.choices} handleChange={this.handleChangeComp}/>
                )}</tbody></table>

            </Container>
        );
    }
}


export default BNInput;