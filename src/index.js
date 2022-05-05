import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "animate.css/animate.min.css";
import { BrowserRouter } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBKziCa2opfS83LWNLnkmrBONv4J0OZGi8",
  authDomain: "personal-f27c7.firebaseapp.com",
  projectId: "personal-f27c7",
  storageBucket: "personal-f27c7.appspot.com",
  messagingSenderId: "735277845592",
  appId: "1:735277845592:web:72fe0b250a3074d3a28e2d",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
