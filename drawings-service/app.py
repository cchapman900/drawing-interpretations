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

@app.route('/drawings')
def list_drawings():
    cursor.execute("SELECT id, image_url, description FROM drawing")
    drawings = cursor.fetchall()
    response = []
    for drawing in drawings:
        response.append({
            'id': drawing[0],
            'image_url': drawing[1],
            'description': drawing[2]
        })
    return jsonify(response)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
