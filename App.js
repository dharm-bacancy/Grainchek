import React from 'react';
import {View} from 'react-native';
import GrainchekNavigator from './src/navigation/GrainchekNavigator';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import authReducer from './src/store/reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App: () => React$Node = () => {
  return(
    <Provider store={store}>
      <GrainchekNavigator/>
    </Provider>
  );
};
export default App;
