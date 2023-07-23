import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import ManAvatar from './components/ManAvatar';
import DoctorAvatar from './components/DoctorAvatar';
import GirlAvatar from './components/GirlAvatar';
import GrandmaAvatar from './components/GrandmaAvatar';
import BoyAvatar from './components/BoyAvatar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/doctorAvatar" component={DoctorAvatar} />
        <Route exact path="/manAvatar" component={ManAvatar} />
        <Route exact path="/boyAvatar" component={BoyAvatar} />
        <Route exact path="/girlAvatar" component={GirlAvatar} />
        <Route exact path="/grandmaAvatar" component={GrandmaAvatar} />
      </Switch>
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
