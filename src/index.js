import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import "./style/image-gallery.css"
import "./style/bootstrap.css";
import "./style/index.css";


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
