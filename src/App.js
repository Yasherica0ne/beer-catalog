import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from './Components/Store';
import ConnectedBeerFilterForm from './Components/BeerFilterForm';
import ConnectedBeerViewer from './Components/BeerViewer';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <ConnectedBeerViewer />
          <ConnectedBeerFilterForm />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
