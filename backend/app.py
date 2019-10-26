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
    fellow_id = request.get_json('fellow_id')['fellow_id']

    # load pupils from database
    cursor.execute(f"SELECT * FROM pupil WHERE Fellow_ID = {fellow_id}")
    row_headers = [x[0] for x in cursor.description]
    pupils = cursor.fetchall()
    json_data = []
    for result in pupils:
        json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)

@app.route("/fellows", methods=['GET'])
def get_fellows():
    # get manager id from HTTP body
    manager_name = request.get_json('manager_name')['manager_name']

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
    pupil_id = request.get_json('pupil_id')['pupil_id']

    # load pupil from database
    cursor.execute(f"SELECT * FROM pupils WHERE ID = {pupil_id}")
    row_headers = [x[0] for x in cursor.description]
    pupil = cursor.fetchall()
    json_data = []
    for result in pupil:
        json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)

@app.route("/evaluations", methods=['GET'])
def get_evaluations():
    fellow_id = request.get_json('fellow_id')['fellow_id'] # Fellow_ID
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