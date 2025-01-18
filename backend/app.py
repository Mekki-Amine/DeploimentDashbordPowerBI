from flask import Flask, send_from_directory, request, jsonify, session, redirect, url_for, flash
from werkzeug.security import generate_password_hash, check_password_hash
import numpy as np
import joblib

app = Flask(__name__, static_folder='../client/build', static_url_path='/')
app.secret_key = "secretkey"

# Chargement du modèle entraîné
model = joblib.load('my_model_final.pkl')

# Création d'un utilisateur avec mot de passe haché
USERNAME = "amine@sesame.tn"
PASSWORD_HASH = generate_password_hash("amine")

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    if username == USERNAME and check_password_hash(PASSWORD_HASH, password):
        session['user'] = username
        return jsonify(success=True)
    else:
        return jsonify(success=False)

@app.route('/dashboard')
def dashboard():
    if 'user' not in session:
        return redirect(url_for('serve'))
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/prediction', methods=['POST'])
def prediction():
    if 'user' not in session:
        return redirect(url_for('serve'))
    data = request.get_json()
    tva = float(data['tva'])
    prediction = model.predict([[tva]])[0]
    return jsonify(prediction=round(prediction, 2))

@app.route('/signout')
def signout():
    session.pop('user', None)
    return redirect(url_for('serve'))

if __name__ == '__main__':
    app.run(debug=True)