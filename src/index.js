import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
// import Dashboard from './component/dashboard/Dashboard';
import Wizard from './component/wizard/Wizard';
import Step2 from './component/wizard/Step2'
import Step3 from './component/wizard/Step3'
ReactDOM.render(<Router>
    <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/wizard" component={Wizard}exact/>
    <Route path="/wizard/step2" component={Step2} />
    <Route path='/wizard/step3' component={Step3}/>
    </Switch>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
