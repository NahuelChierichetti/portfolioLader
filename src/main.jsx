import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { proyectos } from './data/asyncMock.jsx';

const firebaseConfig = {
  apiKey: "AIzaSyBvuq6GSNBP_wnr6rKWCAX-y-REGDLF6TE",
  authDomain: "portfoliolader.firebaseapp.com",
  projectId: "portfoliolader",
  storageBucket: "portfoliolader.appspot.com",
  messagingSenderId: "35275029820",
  appId: "1:35275029820:web:b60a918b4dc9519ba5f239",
  measurementId: "G-C5RYQYYFKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const storage = getStorage(app);

// Move the forEach loop here
//proyectos.forEach((proyecto) => {
//  addDoc(collection(db, 'proyectos'), proyecto)
//    .then((docRef) => {
//      console.log(`Se agregó el documento con id ${docRef.id}`);
//    })
//    .catch((error) => console.log(error));
//});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
