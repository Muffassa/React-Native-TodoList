import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Authorisation from './containers/Authorization';
import TodoList from './containers/TodoList';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='authorisation' component={Authorisation} />
          <Scene key='todolist' component={TodoList} initial/>
        </Scene>
      </Router>
    );
  }
}


