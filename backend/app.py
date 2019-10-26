from bson import json_util
from flask import Flask, request
from flask_cors import CORS
import flask_sqlalchemy
import json

app = Flask(__name__)
CORS(app) # allow cross-origin requests

@app.route("/get_pupils", methods=['GET'])
def get_pupils():
    # get fellow id from HTTP body
    fellow_id = request.get_json('fellow_id')['fellow_id']

    # load pupils from database
    pupils = [] # TODO
    return json.dumps(pupils, default=json_util.default)

@app.route("/get_fellows", methods=['GET'])
def get_fellows():
    # get manager id from HTTP body
    manager_id = request.get_json('manager_id')['manager_id']

    # load fellows from database
    fellows = [] # TODO
    return json.dumps(fellows, default=json_util.default)

@app.route("/get_pupil", methods=['GET'])
def get_pupil():
    # get pupil id from HTTP body
    pupil_id = request.get_json('pupil_id')['pupil_id']

    # load pupil from database
    pupil = [] # TODO
    return json.dumps(pupil, default=json_util.default)

@app.route("/load_region_data", methods=['GET'])
def load_region_data():
    # get region from HTTP body
    region = request.get_json('region')['region']

    # load data from database
    data = []
    return json.dumps(region, default=json_util.default)
    
if __name__ == "__main__":
    app.run(debug=True)