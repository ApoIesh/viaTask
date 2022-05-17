import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import RouterNavigator from './RouterNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import {navigationRef, isReadyRef} from './NavigationActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RouterNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
