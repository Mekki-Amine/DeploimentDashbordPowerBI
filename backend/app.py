from flask import Flask, request, redirect, url_for, session, flash, send_from_directory, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import joblib
import os

app = Flask(__name__, static_folder='../build', static_url_path='/')
app.secret_key = "secretkey"

model = joblib.load('my_model_final.pkl')

USERNAME = "amine@sesame.tn"
PASSWORD_HASH = generate_password_hash("amine")

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    if username == USERNAME and check_password_hash(PASSWORD_HASH, password):
        session['user'] = username
        return jsonify({"success": True})
    else:
        return jsonify({"success": False, "message": "Nom d'utilisateur ou mot de passe incorrect."})

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()
    tva = float(data['tva'])
    prediction = model.predict([[tva]])[0]
    return jsonify({'prediction': round(prediction, 2)})

@app.route('/signout')
def signout():
    session.pop('user', None)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)