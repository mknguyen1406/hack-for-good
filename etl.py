import configparser
from typing import List
import pandas as pd
import mysql.connector
from sqlalchemy import create_engine


def delete_table_queries():
    return {
        "evalutions": "DROP TABLE IF EXISTS evaluations;",
        "pupils": "DROP TABLE IF EXISTS pupils;",
        "fellows": "DROP TABLE IF EXISTS fellows;"
    }


def drop_and_create_tables():
    connection = get_connection()[0]
    cursor = connection.cursor()
    delete_queries = delete_table_queries()

    for delete_query_key in delete_queries:
        cursor.execute(delete_queries[delete_query_key])

    cursor.close()
    connection.close()


def get_connection():
    config = configparser.ConfigParser()
    config.read("./dl.cfg")
    conn = mysql.connector.connect(
        user=config["DB"]["USER"],
        password=config["DB"]["PASSWORD"],
        host=config["DB"]["HOST"],
        database=config["DB"]["DATABASE"]
    )
    return conn, config


def load_evaluations() -> pd.DataFrame:
    evaluations = pd.read_csv("./data/Evaluation_neu_ansi.csv")
    evaluations["Active"] = 1
    return evaluations


def load_fellows() -> pd.DataFrame:
    fellows = pd.read_csv("./data/Fellow_neu.csv")
    return fellows


def load_pupils() -> pd.DataFrame:
    pupils = pd.read_csv("./data/Pupils_neu_ansi.csv")
    return pupils


def create_tables(dfs: List[pd.DataFrame], table_names: list):
    conn, config = get_connection()
    engine = create_engine(f'mysql+mysqlconnector://{config["DB"]["USER"]}:{config["DB"]["PASSWORD"]}@ \
        {config["DB"]["HOST"]}/{config["DB"]["DATABASE"]}')
    for df, table_name in zip(dfs, table_names):
        df.to_sql(table_name, engine)


if __name__ == "__main__":
    drop_and_create_tables()
    _dfs = [load_evaluations(), load_fellows(), load_pupils()]
    _table_names = ["evaluations", "fellows", "pupils"]
    create_tables(dfs=_dfs, table_names=_table_names)
