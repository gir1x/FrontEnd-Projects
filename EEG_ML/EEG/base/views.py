from django.shortcuts import render
import pickle
import numpy as np
from sklearn.preprocessing import StandardScaler
global scaler
def home(request):
    return render(request, 'index.html')

def getPredictions(eeg,heart,pressure):
    model = pickle.load(open('KNN.pkl', 'rb'))
    prediction = model.predict(np.array([[eeg,heart,pressure]]))
    return (prediction[0])

def result(request):
    eeg = float(request.GET['EEG'])
    heart = float(request.GET['heart'])
    pressure = float(request.GET['pressure'])
    result = getPredictions(eeg,heart,pressure)
    if result=="A":
        res="Abnormal EEG"
    elif result=="B":
        res="Abnormal Heart-rate"
    elif result=="C":
        res="Abnormal Pressure"
    else:
        res="Normal"
    return render(request, 'result.html', {'result': res})