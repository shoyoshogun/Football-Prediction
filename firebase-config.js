// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD29dHjTsJ2NxgOuMr5N_M8nLMa5hKJa7g",
  authDomain: "football-prediction-game-4fb39.firebaseapp.com",
  databaseURL: "https://football-prediction-game-4fb39-default-rtdb.firebaseio.com",
  projectId: "football-prediction-game-4fb39",
  storageBucket: "football-prediction-game-4fb39.firebasestorage.app",
  messagingSenderId: "826483920148",
  appId: "1:826483920148:web:5edc0f6aeea029112e0601",
  measurementId: "G-TH602CV7Q2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Realtime Database
const db = firebase.database();

// Firebase Authentication
const auth = firebase.auth();
