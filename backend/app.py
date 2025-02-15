from flask import Flask, request, redirect, url_for, session, flash, send_from_directory, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import joblib
from flask_cors import CORS
import os




app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)
app.secret_key = "secretkey"

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, DELETE'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    return response


# Load the pre-trained model
model = joblib.load('my_model_final.pkl')

# Define constants for username and hashed password
USERNAME = "amine@sesame.tn"
PASSWORD_HASH = generate_password_hash("amine")

@app.route('/')
def index():
    """
    Serve the frontend application.
    """
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/login', methods=['POST'])
def login():
    """
    Handle login requests.
    """
    data = request.get_json()
    
    # Ensure the data contains the necessary keys
    if 'username' not in data or 'password' not in data:
        return jsonify({"success": False, "message": "Invalid request"}), 400
    
    username = data['username']
    password = data['password']
    
    # Print for debugging
    print(f"Username: {username}, Password: {password}")

    # Validate the username and password
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