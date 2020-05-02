import configparser
from flask import Flask, request
from flask_cors import CORS
import json
import mysql.connector
from mysql.connector import errorcode

app = Flask(__name__)

CORS(app)  # allow cross-origin requests

config = configparser.ConfigParser()
config.read("../dl.cfg")


@app.route("/pupils", methods=['GET'])
def get_pupils():
    """
    Gets all pupils and the respective information for an individual fellow.
    """
    try:
        conn = mysql.connector.connect(
            user=config["DB"]["USER"],
            password=config["DB"]["PASSWORD"],
            host=config["DB"]["HOST"],
            database=config["DB"]["DATABASE"]
        )
        print("Connection established")
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with the user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(f"Unexpected error: {err}")
    else:
        cursor = conn.cursor()
    # get fellow id from HTTP body
    fellow_id = int(request.args.get("fellow_id"))

    # load pupils from database
    cursor.execute(f"SELECT DISTINCT p.* FROM pupils p INNER JOIN evaluations e ON p.ID = e.Student_ID \
        WHERE e.Active = 1 AND p.Fellow_ID={fellow_id}")
    row_headers = [x[0] for x in cursor.description]
    pupils = cursor.fetchall()
    json_data = []
    for result in pupils:
        json_data.append(dict(zip(row_headers,result)))

    return json.dumps(json_data)


@app.route("/fellows", methods=['GET'])
def get_fellows():
    """
    Gets all fellows and the respective information for a manager.
    """
    try:
        conn = mysql.connector.connect(
            user=config["DB"]["USER"],
            password=config["DB"]["PASSWORD"],
            host=config["DB"]["HOST"],
            database=config["DB"]["DATABASE"]
        )
        print("Connection established")
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with the user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    else:
        cursor = conn.cursor()
    # get manager id from HTTP body
    manager_name = request.args.get("manager_name")

    # load fellows from database
    cursor.execute(f"SELECT * FROM fellow WHERE Program_Manager = {manager_name}")
    row_headers = [x[0] for x in cursor.description]
    fellows = cursor.fetchall()
    json_data = []
    for result in fellows:
        json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)


@app.route("/pupil", methods=['GET'])
def get_pupil():
    """
    Gets individual information for one pupil.
    """
    try:
        conn = mysql.connector.connect(
            user=config["DB"]["USER"],
            password=config["DB"]["PASSWORD"],
            host=config["DB"]["HOST"],
            database=config["DB"]["DATABASE"]
        )
        print("Connection established")
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with the user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    else:
        cursor = conn.cursor()
    # get pupil id from HTTP body
    pupil_id = request.args.get("pupil_id")

    # load pupil from database
    cursor.execute(f"SELECT * FROM pupils WHERE ID = {pupil_id}")
    row_headers = [x[0] for x in cursor.description]
    pupil = cursor.fetchall()
    json_data = []
    for result in pupil:
        json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)


@app.route("/evaluation", methods=['POST'])
def post_evaluation():
    """
    Creates a new evaluation.
    """
    try:
        conn = mysql.connector.connect(
            user=config["DB"]["USER"],
            password=config["DB"]["PASSWORD"],
            host=config["DB"]["HOST"],
            database=config["DB"]["DATABASE"]
        )
        print("Connection established")
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with the user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    else:
        cursor = conn.cursor()
    fellow_id = request.get_json('fellow_id')['fellow_id']
    pupil_id = request.get_json('pupil_id')['pupil_id']
    timestamp = request.get_json('time')['time']

    mathe = request.get_json('mathe')['mathe']
    englisch = request.get_json('englisch')['englisch']
    deutsch = request.get_json('deutsch')['deutsch']

    weiteres_fach = request.get_json('weiteres_fach')['weiteres_fach']
    hoeren = request.get_json('hoeren')['hoeren']
    sprechen = request.get_json('sprechen')['sprechen']
    schreiben = request.get_json('schreiben')['schreiben']

    lesen = request.get_json('lesen')['lesen']
    selbstvertrauen = request.get_json('selbstvertrauen')['selbstvertrauen']
    teamdenken = request.get_json('teamdenken')['teamdenken']

    reflexionsfaehigkeit = request.get_json('reflexionsfaehigkeit')['reflexionsfaehigkeit']
    regeleinhaltung = request.get_json('regeleinhaltung')['regeleinhaltung']
    hilfsbereitschaft = request.get_json('hilfsbereitschaft')['hilfsbereitschaft']

    konfliktverhalten = request.get_json('konfliktverhalten')['konfliktverhalten']
    motivation = request.get_json('motivation')['motivation']
    lernziele = request.get_json('lernziele')['lernziele']

    elternkontakt_date = request.get_json('elternkontakt_date')['elternkontakt_date']
    elternkontakt_comment = request.get_json('elternkontakt_comment')['elternkontakt_comment']
    fehlzeiten = request.get_json('fehlzeiten')['fehlzeiten']

    berufsorientierung_state = request.get_json('berufsorientierung_state')['berufsorientierung_state']
    berufsorientierung_comment = request.get_json('berufsorientierung_comment')['berufsorientierung_comment']
    uebergangsprognose = request.get_json('uebergangsprognose')['uebergangsprognose']
    active = 1

    try:
        print(f"INSERT INTO evaluation (Fellow_ID, Student_ID, Time, Mathe, Englisch, Deutsch, Weiteres_Fach,"
                       f"Hoeren, Sprechen, Schreiben, Lesen, "
                       f"Selbstvertrauen, Teamdenken, Reflexionsfaehigkeit, Regeleinhaltung, Hilfsbereitschaft, Konfliktverhalten,"
                       f"Motivation, Lernziele,"
                       f"Elternkontakt_Date, Elternkontakt_Comment, Fehlzeiten,"
                       f"Berufsorientierung_State, Berufsorientierung_Comment,"
                       f"Uebergangsprognose, Active, Kommentar)"
                       f"VALUES ({fellow_id},{pupil_id},{timestamp}, {mathe}, {englisch}, {deutsch}, {weiteres_fach}, "
                       f"{hoeren}, {sprechen}, {schreiben}, {lesen}, "
                       f"{selbstvertrauen}, {teamdenken}, {reflexionsfaehigkeit}, {regeleinhaltung}, {hilfsbereitschaft}, {konfliktverhalten}, "
                       f"{motivation}, {lernziele},"
                       f"{elternkontakt_date}, '{elternkontakt_comment}', {fehlzeiten},"
                       f"{berufsorientierung_state}, '{berufsorientierung_comment}',"
                       f"'{uebergangsprognose}' ,{active}, 'Kommentar')")
        cursor.execute(f"INSERT INTO evaluation (Fellow_ID, Student_ID, Time, Mathe, Englisch, Deutsch, Weiteres_Fach,"
                       f"Hoeren, Sprechen, Schreiben, Lesen, "
                       f"Selbstvertrauen, Teamdenken, Reflexionsfaehigkeit, Regeleinhaltung, Hilfsbereitschaft, Konfliktverhalten,"
                       f"Motivation, Lernziele,"
                       f"Elternkontakt_Date, Elternkontakt_Comment, Fehlzeiten,"
                       f"Berufsorientierung_State, Berufsorientierung_Comment,"
                       f"Uebergangsprognose, Active, Kommentar)"
                       f"VALUES ({fellow_id},{pupil_id},{timestamp}, {mathe}, {englisch}, {deutsch}, {weiteres_fach}, "
                       f"{hoeren}, {sprechen}, {schreiben}, {lesen}, "
                       f"{selbstvertrauen}, {teamdenken}, {reflexionsfaehigkeit}, {regeleinhaltung}, {hilfsbereitschaft}, {konfliktverhalten}, "
                       f"{motivation}, {lernziele},"
                       f"'{elternkontakt_date}', '{elternkontakt_comment}', {fehlzeiten},"
                       f"{berufsorientierung_state}, '{berufsorientierung_comment}',"
                       f"'{uebergangsprognose}' ,{active}, 'Kommentar')")
        print(cursor.rowcount, "record inserted.")
        conn.commit()
        print(cursor.rowcount, "record inserted.")
        return 'Success'
    except BaseException as e:
        print(e)
        conn.rollback()
        return 'Error'


@app.route("/evaluations", methods=['GET'])
def get_evaluations():
    """
    Gets all evaluations of an individual fellow.
    """
    try:
        conn = mysql.connector.connect(
            user=config["DB"]["USER"],
            password=config["DB"]["PASSWORD"],
            host=config["DB"]["HOST"],
            database=config["DB"]["DATABASE"]
        )
        print("Connection established")
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with the user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    else:
        cursor = conn.cursor()
    fellow_id = request.args.get("fellow_id")
    cursor.execute(f"SELECT * FROM evaluation WHERE Fellow_ID = {fellow_id}")
    row_headers = [x[0] for x in cursor.description]
    evaluations = cursor.fetchall()
    json_data = []
    for result in evaluations:
        json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
