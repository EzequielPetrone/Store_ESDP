import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT7PqXbXA97biXYeHYCeE6wPfLSC4JA7s",
  authDomain: "store-esdp.firebaseapp.com",
  projectId: "store-esdp",
  storageBucket: "store-esdp.appspot.com",
  messagingSenderId: "345904518545",
  appId: "1:345904518545:web:d3f7c5b0b637deff3f3630",
  measurementId: "G-9WMKF9QHEW"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
