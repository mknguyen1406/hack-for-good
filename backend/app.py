from flask import Flask, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import json
import mysql.connector
from mysql.connector import errorcode

app = Flask(__name__)

CORS(app) # allow cross-origin requests

@app.route("/pupils", methods=['GET'])
def get_pupils():
    # get fellow id from HTTP body
    fellow_id = int(request.args.get("fellow_id"))

    # load pupils from database
    cursor.execute(f"SELECT * FROM pupil p INNER JOIN evaluation e ON p.ID = e.Student_ID WHERE e.Active = 1 AND p.Fellow_ID={fellow_id}")
    row_headers = [x[0] for x in cursor.description]
    pupils = cursor.fetchall()
    json_data = []
    for result in pupils:
        json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)

@app.route("/fellows", methods=['GET'])
def get_fellows():
    # get manager id from HTTP body
    manager_name =  request.args.get("manager_name")

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

    # commit according to https://stackoverflow.com/questions/5687718/how-can-i-insert-data-into-a-mysql-database
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


    test = 0

@app.route("/evaluations", methods=['GET'])
def get_evaluations():
    fellow_id = request.args.get("fellow_id") # Fellow_ID
    cursor.execute(f"SELECT * FROM evaluation WHERE Fellow_ID = {fellow_id}")
    row_headers = [x[0] for x in cursor.description]
    evaluations = cursor.fetchall()
    json_data = []
    for result in evaluations:
        json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)

@app.route("/region_data", methods=['GET'])
def load_region_data():
    # get region from HTTP body
    region = request.get_json('region')['region']

    # load data from database
    data = []
    return json.dumps(region)

if __name__ == "__main__":
    # Obtain connection string information from the portal
    config = {
        'host':'hfg-db-server.mysql.database.azure.com',
        'user':'ksritter@hfg-db-server',
        'password':'h4forgood!',
        'database':'ksritter'
    }

    # Construct connection string
    try:
        conn = mysql.connector.connect(**config)
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
    app.run(debug=True)