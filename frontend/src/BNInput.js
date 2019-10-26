import React from 'react';
import App from "./App";
import BNInputComp from "./BNInputComp";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './App.css';
import { styled } from '@material-ui/core/styles';



const DEBUG = true;

if (DEBUG)
    console.log('WARNING: DEBUG is true!!!!');


const SendButton = styled(Button)({
    float: "right",
    margin: "50px 0 50px 0"
});


const API_URL_POST = "http://127.0.0.1:5000/evaluation";


class BNInput extends React.Component {

    constructor(props) {
        super(props);

        this.props = props;

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeComp = this.handleChangeComp.bind(this);
        this.onSend = this.onSend.bind(this);
        this.indexIn1D = this.indexIn1D.bind(this);
        this.indexIn2D = this.indexIn2D.bind(this);

        this.choicesGeR = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        // TODO display elaborate category description of LKM
        this.choicesLKM = ['Stufe 1 (destruktiv)', 'Stufe 2 (apathisch)', 'Stufe 3 (zielgerichtet)', 'Stufe 4 (eigenmotiviert)', 'Stufe 5 (außergewöhnlich)'];
        this.choicesBinaryn = ['Ja', 'Nein'];   // TODO allow no selection (optional)
        this.choicesPrognosis = ['A', 'B', 'C', 'D'];

        //this.dates = ['1 | Beginn 1. SJ', '2 | Halbjahr 1. SJ', '3 | Ende 1. SJ/Anfang 2. SJ', '4 | Halbjahr 2. SJ', '5 | Ende 2. SJ'];
        this.mainSubjects = ['Mathe', 'Englisch', 'Deutsch', 'Weiteres'];
        this.verbalSkills = [{name: 'Hören', choices: this.choicesGeR}, {name: 'Sprechen', choices: this.choicesGeR}, {name: 'Schreiben', choices: this.choicesGeR}, {name: '(Vor-)Lesen', choices: this.choicesGeR}];
        this.socialBehavior = [{name: 'Selbstvertrauen', choices: this.choicesLKM}, {name: 'Arbeitet gerne mit anderen zusammen (Teamdenken)', choices: this.choicesLKM}, {name: 'Reflexionsfähigkeit', choices: this.choicesLKM} ,
            {name: 'Hält Schul- und Klassen-/Gruppenregeln ein', choices: this.choicesBinaryn}, {name: 'Ist hilfsbereit', choices: this.choicesBinaryn}, {name: 'Löst Konflikte adäquat', choices: this.choicesBinaryn}];
        this.learningBehavior = [{name: 'Ist motiviert', choices: this.choicesLKM}, {name: 'Setzt sich eigene Lernziele', choices: this.choicesLKM}];
        this.parentsAbsences = ['Elternkontakt (Anzahl Kontaktpunkte: Telefonate, Gespräche etc.)', 'Fehlzeiten (Tage / Stunden… wichtig ist Einheitlichkeit)', 'Kommentar zu Eltern'];
        this.future = ['hat an berufsorientierenden Maßnahmen teilgenommen (Häufigkeit + Art)', 'Kommentar zu Berufsorientierung'];
        this.prognosis = [{name: 'Prognose', choices: this.choicesPrognosis}];

        this.state = {};
        // initialize state with all
        if (DEBUG) {
            this.mainSubjects.forEach(s => this.state[s] = Math.floor(Math.random() * 3 + 1));
            this.verbalSkills.forEach(s => this.state[s.name] = s.choices[Math.floor(Math.random() * s.choices.length)]);
            this.socialBehavior.forEach(s => this.state[s.name] = s.choices[Math.floor(Math.random() * s.choices.length)]);
            this.learningBehavior.forEach(s => this.state[s.name] = s.choices[Math.floor(Math.random() * s.choices.length)]);
            this.prognosis.forEach(s => this.state[s.name] = s.choices[Math.floor(Math.random() * s.choices.length)]);
        } else
        {
            this.mainSubjects.forEach(s => this.state[s] = '');
            this.verbalSkills.forEach(s => this.state[s.name] = '');
            this.socialBehavior.forEach(s => this.state[s.name] = '');
            this.learningBehavior.forEach(s => this.state[s.name] = '');
            this.prognosis.forEach(s => this.state[s.name] = '');
        }
        this.state['date'] = 1;
    }
    
    indexIn1D(name, list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i] === name)
                return i + 1;
        }
        return -1;
    }

    indexIn2D(name, list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].name === name)
                return i + 1;
        }
        return -1;
    }

    onSend() {
        var convertedState = {
            "fellow_id": 1,
            "pupil_id": 1,
            "time": this.state.date,
            "mathe": this.state['Mathe'],
            "englisch": this.state['Englisch'],
            "deutsch": this.state['Deutsch'],
            "weiteres_fach": this.state['Weiteres'],
            "hoeren": this.indexIn1D(this.state['Hören'], this.choicesGeR),
            "sprechen": this.indexIn1D(this.state['Sprechen'], this.choicesGeR),
            "schreiben": this.indexIn1D(this.state['Sprechen'], this.choicesGeR),
            "lesen": this.indexIn1D(this.state['(Vor-)Lesen'], this.choicesGeR),
            "selbstvertrauen": this.indexIn1D(this.state['Selbstvertrauen'], this.choicesLKM),
            "teamdenken": this.indexIn1D(this.state['Arbeitet gerne mit anderen zusammen (Teamdenken)'], this.choicesLKM),
            "reflexionsfaehigkeit": this.indexIn1D(this.state['Reflexionsfähigkeit'], this.choicesLKM),
            "regeleinhaltung": this.indexIn1D(this.state['Hält Schul- und Klassen-/Gruppenregeln ein'], this.choicesBinaryn),
            "hilfsbereitschaft": this.indexIn1D(this.state['Ist hilfsbereit'], this.choicesBinaryn),
            "konfliktverhalten": this.indexIn1D(this.state['Löst Konflikte adäquat'], this.choicesBinaryn),
            "motivation": this.indexIn1D(this.state['Ist motiviert'], this.choicesLKM),
            "lernziele": this.indexIn1D(this.state['Setzt sich eigene Lernziele'], this.choicesLKM),
            "elternkontakt_date": this.state['Setzt sich eigene Lernziele'],
            "elternkontakt_comment": this.state['Kommentar zu Eltern'],
            "fehlzeiten": this.state['Fehlzeiten (Tage / Stunden… wichtig ist Einheitlichkeit)'],
            "berufsorientierung_state": this.state['hat an berufsorientierenden Maßnahmen teilgenommen (Häufigkeit + Art)'],
            "berufsorientierung_comment": this.state['Kommentar zu Berufsorientierung'],
            "uebergangsprognose": this.indexIn1D(this.state['Prognose'], this.choicesPrognosis)
        };

        console.log(convertedState);

        const response = fetch(API_URL_POST, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(convertedState),
        }).then(e => console.log('Result: ' + e));
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
        const subTitleMargin = {
            marginBlockStart: "40px",
            textAlign: "left"
        };
        const subSubTitleMargin = {
            textAlign: "left"
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

                <h3 style={subTitleMargin}>Leistungen in den Hautpfächern</h3>
                <table><tbody>

                {this.mainSubjects.map((name) =>
                        <BNInputComp value={this.state[name]} name={name} type={"number"} handleChange={this.handleChangeComp}/>
                        )}

                <h3 style={subTitleMargin}>Sprachliche Kompetenz</h3>
               {this.verbalSkills.map((el) =>
                    <BNInputComp value={this.state[el.name]} name={el.name} type={"select"} options={el.choices} handleChange={this.handleChangeComp}/>
                )}

                <h3 style={subTitleMargin}>Handlungskompetenzen / Lernkulturmatrix (LKM)</h3>
                <h4 style={subSubTitleMargin}>Sozialverhalten</h4>
                {this.socialBehavior.map((el) =>
                    <BNInputComp value={this.state[el.name]} name={el.name} type={"select"} options={el.choices} handleChange={this.handleChangeComp}/>
                )}

                <h4 style={subSubTitleMargin}>Lern- und Arbeitsverhalten</h4>
                {this.learningBehavior.map((el) =>
                    <BNInputComp value={this.state[el.name]} name={el.name} type={"select"} options={el.choices} handleChange={this.handleChangeComp}/>
                )}

                <h3 style={subTitleMargin}>Elternarbeit & Fehlzeiten</h3>
                {this.parentsAbsences.map((el) =>
                    <BNInputComp value={this.state[el]} name={el} type={"freetext"} handleChange={this.handleChangeComp}/>
                )}

                <h3 style={subTitleMargin}>Zukunft</h3>
                {this.future.map((el) =>
                    <BNInputComp value={this.state[el]} name={el} type={"freetext"} handleChange={this.handleChangeComp}/>
                )}

                <h3 style={subTitleMargin}>Sicherer Übergang | Übergangsprognose</h3>
                {this.prognosis.map((el) =>
                    <BNInputComp value={this.state[el.name]} name={el.name} type={"select"} options={el.choices} handleChange={this.handleChangeComp}/>
                )}

                </tbody></table>

                <SendButton variant="contained" color="primary" onClick={this.onSend}>
                    An PM senden
                </SendButton>

            </Container>
        );
    }
}


export default BNInput;