from flask import Flask, jsonify

from flask.ext.mysql import MySQL

app = Flask(__name__)

mysql = MySQL()

# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'drawings'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_PORT'] = 8889
mysql.init_app(app)

conn = mysql.connect()

cursor = conn.cursor()


@app.route('/drawings', methods=['GET'])
def list_drawings():
    cursor.execute("""
    SELECT id, image_url, description 
    FROM drawing""")
    drawings = cursor.fetchall()
    response = []
    for drawing in drawings:
        response.append({
            'id': drawing[0],
            'image_url': drawing[1],
            'description': drawing[2]
        })
    return jsonify(response)


@app.route('/drawings/<drawing_id>', methods=['GET'])
def get_drawing(drawing_id):
    cursor.execute("""
    SELECT id, image_url, description 
    FROM drawing 
    WHERE id = {}""".format(drawing_id))
    drawing = cursor.fetchone()
    return jsonify(drawing)


@app.route('/drawings/<drawing_id>/interpretations', methods=['GET'])
def list_interpretations(drawing_id):
    cursor.execute("""
    SELECT i.id, user_id, u.username, text 
    FROM interpretation as i
    JOIN user as u 
    ON i.user_id = u.id
    WHERE drawing_id = {}
    """.format(drawing_id))
    interpretations = cursor.fetchall()
    response = []
    for interpretation in interpretations:
        response.append({
            'id': interpretation[0],
            'user_id': interpretation[1],
            'username': interpretation[2],
            'text': interpretation[3]
        })
    return jsonify(response)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
