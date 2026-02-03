# 🏥 Health Monitoring System with Machine Learning

A full-stack web application leveraging machine learning to predict health anomalies from EEG signals, heart rate, and blood pressure data. This project demonstrates the integration of predictive analytics with a clean, responsive user interface for real-time health monitoring.

---

## 📋 Project Overview

This health monitoring system uses a trained K-Nearest Neighbors (KNN) classifier to analyze physiological data and identify potential abnormalities. The application provides immediate feedback to users, classifying their health metrics into specific categories (normal or abnormal readings for EEG, heart rate, or blood pressure).

The project showcases end-to-end development skills, from data preprocessing and model training to building a production-ready Django web application with an intuitive frontend interface.

---

## 🛠️ Technologies Used

### Backend
- **Django 5.0.1** - High-level Python web framework
- **Python 3.x** - Core programming language
- **scikit-learn 1.3.0** - Machine learning model training and prediction
- **NumPy 1.26.0** - Numerical computing and data manipulation
- **Pickle** - Model serialization and deployment

### Frontend
- **HTML5 & CSS3** - Semantic markup and modern styling
- **Bootstrap 4** - Responsive grid system and components
- **Font Awesome** - Icon library for enhanced UI
- **Custom CSS** - Tailored styling for improved UX

### Machine Learning
- **K-Nearest Neighbors (KNN)** - Classification algorithm
- **Jupyter Notebook** - Model experimentation and analysis
- **StandardScaler** - Feature normalization

---

## ✨ Features & Focus Areas

### Core Functionality
- **Real-time Prediction**: Instant health status classification based on user input
- **Multi-parameter Analysis**: Simultaneous evaluation of EEG signals, heart rate, and blood pressure
- **Trained ML Model**: Pre-trained KNN classifier with optimized hyperparameters
- **Persistent Data Storage**: SQLite database for application data management

### Technical Highlights
- **RESTful Architecture**: Clean separation between frontend and backend logic
- **Model Persistence**: Efficient model loading using pickle serialization
- **Responsive Design**: Mobile-first approach ensuring cross-device compatibility
- **Form Validation**: Client-side input validation for data integrity
- **Clean Code Structure**: Modular Django architecture following best practices

### UI/UX Design
- **Intuitive Interface**: Simple, three-field form for easy data entry
- **Visual Feedback**: Clear result display with categorized health status
- **Modern Aesthetics**: Professional color scheme with smooth transitions
- **Accessibility**: Semantic HTML and labeled form controls

---

## 🎯 Learning Goals & Development Approach

This project was developed with a focus on:

1. **Full-Stack Integration**: Bridging machine learning models with production web applications
2. **Model Deployment**: Implementing ML model serving in a real-world web environment
3. **API Design**: Creating clean interfaces between frontend forms and backend prediction logic
4. **Data Preprocessing**: Understanding feature engineering and normalization techniques
5. **Performance Optimization**: Efficient model loading and prediction serving
6. **User-Centered Design**: Building interfaces that make complex ML accessible to end users

---

## 🚀 How to Run the Project

### Prerequisites
```bash
- Python 3.8 or higher
- pip package manager
```

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd EEG_ML/EEG
   ```

2. **Create and activate virtual environment** (recommended)
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Apply database migrations**
   ```bash
   python manage.py migrate
   ```

5. **Run the development server**
   ```bash
   python manage.py runserver
   ```

6. **Access the application**
   ```
   Open your browser and navigate to: http://127.0.0.1:8000/
   ```

### Using the Application

1. Enter EEG signal value (numerical)
2. Enter heart rate (beats per minute)
3. Enter blood pressure reading
4. Click "Predict" to receive instant health status classification

---

## 📊 Model Details

### Training Data
- Dataset contains synthetic and real EEG, heart rate, and blood pressure readings
- Features are normalized using StandardScaler for consistent predictions
- Multiple CSV files used for training and validation (`eeg_data.csv`, `eeg ratio.csv`, `synthetic_eeg_output.csv`)

### Model Architecture
- **Algorithm**: K-Nearest Neighbors (KNN) Classifier
- **Serialization**: Pickle format for fast loading
- **Prediction Categories**: 
  - Normal (N)
  - Abnormal EEG (A)
  - Abnormal Heart Rate (B)
  - Abnormal Pressure (C)

### Notebooks
The `/Backend` directory contains Jupyter notebooks documenting:
- Exploratory data analysis
- Feature engineering experiments
- Model training and evaluation
- Hyperparameter tuning process

---

## 📁 Project Structure

```
EEG_ML/
├── Backend/
│   ├── EEG.ipynb                    # Model training notebook
│   ├── eeg_data.csv                 # Training dataset
│   ├── eeg ratio.csv                # Feature ratios
│   └── KNN.pkl                      # Trained model
├── EEG/
│   ├── base/
│   │   ├── views.py                 # Prediction logic and routing
│   │   ├── urls.py                  # URL configuration
│   │   └── models.py                # Database models
│   ├── EEG/
│   │   ├── settings.py              # Django configuration
│   │   └── urls.py                  # Main URL routing
│   ├── templates/
│   │   ├── index.html               # Input form interface
│   │   └── result.html              # Results display page
│   ├── static/
│   │   └── images/                  # Application assets
│   ├── KNN.pkl                      # Deployed model file
│   ├── manage.py                    # Django management script
│   └── requirements.txt             # Python dependencies
└── EEG_final_updated.ipynb          # Final model notebook
```

---

## 🔮 Future Improvements

### Planned Enhancements
- [ ] **User Authentication**: Implement login system for personalized tracking
- [ ] **Historical Data Dashboard**: Visualize health trends over time using Chart.js or D3.js
- [ ] **Enhanced Model**: Experiment with ensemble methods (Random Forest, XGBoost)
- [ ] **API Development**: Create RESTful API endpoints for mobile app integration
- [ ] **Real-time Monitoring**: WebSocket integration for continuous data streaming
- [ ] **Model Retraining Pipeline**: Automated retraining with new data
- [ ] **Export Functionality**: Generate PDF reports of health assessments
- [ ] **Multi-language Support**: Internationalization for broader accessibility
- [ ] **Advanced Analytics**: Statistical analysis and anomaly detection algorithms
- [ ] **Responsive Charts**: Add interactive data visualizations on result page

### Technical Improvements
- Implement proper error handling and logging
- Add comprehensive unit and integration tests
- Optimize model inference speed
- Deploy to cloud platform (AWS, Heroku, or Azure)
- Set up CI/CD pipeline for automated testing and deployment
- Add Docker containerization for consistent deployment
- Implement caching strategies for improved performance

---

## 📝 Notes

This application demonstrates practical implementation of machine learning in healthcare technology. While the current model provides classifications based on training data, it is designed as a prototype for educational and portfolio purposes. For production medical applications, additional validation, regulatory compliance, and clinical testing would be required.

---

## 🤝 Contributing

While this is a portfolio project, feedback and suggestions are welcome. Feel free to open issues or reach out with ideas for enhancements.

---

## 📄 License

This project is available for educational and portfolio purposes.

---

## 👤 Contact

For questions, collaborations, or opportunities, please reach out through GitHub.

---

**Built with ❤️ using Django, scikit-learn, and modern web technologies**
