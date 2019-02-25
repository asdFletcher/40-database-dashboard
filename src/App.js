import React, { Component } from 'react';
import Logger from "./logger.js";
import DataDisplay from "./data-display.js";
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <>
        <h1>Database Dashboard</h1>
        <Provider store = {store}>
          <Logger namespace="database" room="destroy"/>
          <Logger namespace="database" room="create"/>
          <Logger namespace="database" room="update"/>
          <DataDisplay />
        </ Provider>
      </>
    );
  }
}


export default App;
