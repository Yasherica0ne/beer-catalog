import React, { Component } from 'react';
import { Provider} from 'react-redux';
import store from './Components/Store';
import ConnectedBeerFilterForm from './Components/BeerFilterForm';
import ConnectedBeerViewer from './Components/BeerViewer';
import './App.css';

class App extends Component {

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
