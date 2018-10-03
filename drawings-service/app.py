from flask import Flask, jsonify, request
from flask_cors import CORS

import json
import db

APP = Flask(__name__)
CORS(APP)


@APP.route('/drawings', methods=['GET'])
def list_drawings():
    response = db.get_drawings()
    return jsonify(response)


@APP.route('/drawings/<drawing_id>', methods=['GET'])
def get_drawing(drawing_id):
    drawing = db.get_drawing(drawing_id)
    if drawing:
        return jsonify(drawing)
    else:
        return 'Drawing not found', 404


@APP.route('/drawings/<drawing_id>/interpretations', methods=['POST'])
def create_interpretation(drawing_id):
    payload = json.loads(request.data)

    try:
        user_id = payload['user_id']
        text = payload['text']
    except Exception, e:
        return "Invalid request", 400

    try:
        response = db.create_interpretation(drawing_id=drawing_id, user_id=user_id, text=text)
        return jsonify(response)
    except Exception, e:
        return repr(e), 409


@APP.errorhandler(Exception)
def exception_handler(error):
    return repr(error), 500


if __name__ == '__main__':
    APP.run(host='0.0.0.0')
