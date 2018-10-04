from flaskext.mysql import MySQL

from app import APP
from config import config

mysql = MySQL()

# MySQL configurations
APP.config['MYSQL_DATABASE_USER'] = config['MYSQL_DATABASE_USER']
APP.config['MYSQL_DATABASE_PASSWORD'] = config['MYSQL_DATABASE_PASSWORD']
APP.config['MYSQL_DATABASE_DB'] = config['MYSQL_DATABASE_DB']
APP.config['MYSQL_DATABASE_HOST'] = config['MYSQL_DATABASE_HOST']
APP.config['MYSQL_DATABASE_PORT'] = config['MYSQL_DATABASE_PORT']

mysql.init_app(APP)

conn = mysql.connect()

cursor = conn.cursor()


def get_drawings():
    try:
        query = """
            SELECT id, image_url, description 
            FROM drawing"""
        cursor.execute(query)
        drawings = cursor.fetchall()
        response = []
        for drawing in drawings:
            response.append({
                'id': drawing[0],
                'image_url': drawing[1],
                'description': drawing[2]
            })
        return response

    except Exception, e:
        print e


def get_drawing(drawing_id):
    try:
        drawing_query = """
            SELECT id, image_url, description 
            FROM drawing 
            WHERE id = %s"""
        cursor.execute(drawing_query, drawing_id)
        response = cursor.fetchone()

        drawing = {
            'id': response[0],
            'image_url': response[1],
            'description': response[2]
        }

        interpretations = get_interpretations(drawing_id)
        drawing['interpretations'] = interpretations

        return drawing

    except Exception, e:
        print e


def get_interpretations(drawing_id):
    try:
        query = """
            SELECT i.id, user_id, u.username, text 
            FROM interpretation as i
            JOIN user as u 
            ON i.user_id = u.id
            WHERE drawing_id = %s"""
        cursor.execute(query, drawing_id)
        interpretations = cursor.fetchall()
        response = []
        for interpretation in interpretations:
            response.append({
                'id': interpretation[0],
                'user_id': interpretation[1],
                'username': interpretation[2],
                'text': interpretation[3]
            })
        return response

    except Exception, e:
        print e


def create_interpretation(drawing_id, user_id, text):
    try:
        query = """
            INSERT INTO interpretation (user_id, drawing_id, text)
            VALUES
                (%s, %s, %s)"""
        affected_rows = cursor.execute(query, (user_id, drawing_id, text))
        conn.commit()
        return "Successfully updated {} rows".format(affected_rows)

    except Exception, e:
        raise e

def get_user_by_username(username):
    try:
        get_query = """
            SELECT id, username FROM user
            WHERE username = %s"""
        cursor.execute(get_query, username)
        response = cursor.fetchone()

        if not response:
            return None

        user = {
            'id': response[0],
            'username': response[1]
        }

        return user

    except Exception, e:
        raise e


def create_user_by_username(username):
    try:
        query = """
                    INSERT INTO user (username)
                    VALUES (%s)
                """

        cursor.execute(query, username)
        conn.commit()
        return get_user_by_username(username)

    except Exception, e:
        raise e

