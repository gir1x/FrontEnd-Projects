import numpy as np
import pandas as pd
import warnings
warnings.filterwarnings('ignore')

import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import precision_score, recall_score, f1_score, confusion_matrix
import pickle

# Load the updated data
df = pd.read_csv("A:/My files/EEG_ML/Backend/synthetic_eeg_output.csv")  # should contain columns: EEG, HeartRate, Label

# Check data
print(df.info())
print(df.describe())
print(df['Label'].value_counts())

# Plot histogram
df.hist(bins=50, figsize =(15,10), color='teal')
plt.show()

# Split features and labels
X = df.drop(['Label'], axis=1)
y = df["Label"]

# Split train/test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
print(X_train.shape, X_test.shape)

# --- Train KNN ---
KNN = KNeighborsClassifier()
KNN.fit(X_train, y_train)
y_pred_knn = KNN.predict(X_test)

# Metrics for KNN
print("\n--- KNN Metrics ---")
print(f"Accuracy: {KNN.score(X_train, y_train)}")
print(f"Precision: {precision_score(y_test, y_pred_knn, average='macro')}")
print(f"Recall: {recall_score(y_test, y_pred_knn, average='macro')}")
print(f"F1 Score: {f1_score(y_test, y_pred_knn, average='macro')}")

# Save KNN model
with open('KNN.pkl', 'wb') as file:
    pickle.dump(KNN, file)

# --- Train Naive Bayes ---
NB = GaussianNB()
NB.fit(X_train, y_train)
y_pred_nb = NB.predict(X_test)

# Metrics for NB
print("\n--- Naive Bayes Metrics ---")
print(f"Accuracy: {NB.score(X_train, y_train)}")
print(f"Precision: {precision_score(y_test, y_pred_nb, average='macro')}")
print(f"Recall: {recall_score(y_test, y_pred_nb, average='macro')}")
print(f"F1 Score: {f1_score(y_test, y_pred_nb, average='macro')}")

# --- Confusion Matrix ---
def plot_confusion_matrix(cm, model_name):
    plt.figure(figsize=(6,5))
    sns.heatmap(cm, annot=True, fmt="d", cmap="YlGnBu")
    plt.title(f"{model_name} Confusion Matrix")
    plt.xlabel("Predicted")
    plt.ylabel("Actual")
    plt.show()

cm_knn = confusion_matrix(y_test, y_pred_knn)
cm_nb = confusion_matrix(y_test, y_pred_nb)

plot_confusion_matrix(cm_knn, "KNN")
plot_confusion_matrix(cm_nb, "Naive Bayes")

# --- Test Predictions with KNN ---
test_inputs = [
    [2.8, 72],   # Expected: A (Mild)
    [1.5, 90],   # Expected: B (High HR)
    [3.5, 75],   # Expected: C (High Stress)
    [1.2, 70]    # Expected: D (Normal)
]

print("\n--- Test Cases ---")
for inp in test_inputs:
    result = KNN.predict([inp])[0]
    if result == 'A':
        print(f"{inp} → Mild Stress")
    elif result == 'B':
        print(f"{inp} → High Heart Rate")
    elif result == 'C':
        print(f"{inp} → High Stress")
    else:
        print(f"{inp} → Normal")
