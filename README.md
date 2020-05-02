# TechFirst Fellow Management Platform

[TeachFirst](https://www.teachfirst.de) is a programme where scholars join focal schools supporting pupils. The current processes require a lot of manual work with filling out and evaluating large excel sheets. Thus, we implemented this central platform to ease the evaluation processes.

The central dashboard shows the pupils a fellow is currently supporting, the given evaluations and prognoses, and the fellow's appointments.

![central dashboard](https://i.imgur.com/afmaRWe.png)

Moreover, a fellow can get access to all given information of a specific pupil accessing individual grades, behavior and change over time.

![pupil information](https://i.imgur.com/Oc4apoS.png)

Also, a fellow can easily create new evaluations accessing pre-filled templates. Beside fellows keeping track over their pupils, managers can access the evaluation statistics to see which fellows may be in need of further support. Overall, this platform reduces the fellows' and managers' workloads from hours to seconds. 

## Database schema

The database consists of the three tables that are automatically created from the existing data sources.

| name | description |
| ---- | ----------- |
| fellows | contains all the information regarding the existing fellows |
| pupils | contains all the information regarding fellows' pupils |
| evaluations | contains all evaluations fellow gave their pupils |

## ETL pipeline

The ETL pipeline (see `etl.py`) extracts all the data from existing Excel and csv files, transforms the data to pandas DataFrames getting enriched with the needed information and loads it into the defined database schema.

## Installation

* Setup a MySQL database and edit the connection details in `dl.cfg`.
* Install python packages with `pip install -r requirements.txt`.
* Run the ETL pipeline with `python etl.py`.
* Start the backend Flask application from the `backend/` directory with `python app.py`.
* Install the frontend requirements from the `frontend/` folder with `npm install`.
* Start the frontend application from the `frontend/` folder with `npm start`.
