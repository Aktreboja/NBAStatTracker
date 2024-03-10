from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/api/python", methods = ['GET'])
def hello_world():
    if (request.method == 'GET'):
        data = {
            "Modules": 15,
            "Subject": "Data Structures and Algorithms"
        }
        return jsonify(data)
