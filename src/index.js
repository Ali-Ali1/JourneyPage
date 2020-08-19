import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyC4kiKstffQFa--T9JRc_thRJLzqbKHqPQ",
    authDomain: "issues-b701d.firebaseapp.com",
    databaseURL: "https://issues-b701d.firebaseio.com",
    projectId: "issues-b701d",
    storageBucket: "issues-b701d.appspot.com",
    messagingSenderId: "429315663370",
    appId: "1:429315663370:web:530d2a097e51c8f7a6e1f3",
    measurementId: "G-9R0LJYKQW0"
  
  
});

ReactDOM.render(<App />, document.getElementById('issues'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
