import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import {Router, Route, browserHistory, IndexRoute, Link} from 'react-router';

import logo from './logo.svg';
import './styles/App.css';

import View1 from './views/view1'
import View2 from './views/view2'

class App extends Component {


    render() {


        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div className="App-nav">
                    <div className="navItem"><Link to="/one"><p>View 1</p></Link></div>
                    <div className="navItem"><Link to="/two"><p>View 2</p></Link></div>
                </div>
                <div className="App-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={View1} />
      <Route path="/one" component={View1}/>
      <Route path="/two" component={View2}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
