/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React  from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigation from './AppModules/Navigation/Navigation.js';
import store from './AppModules/Redux/store.js';
import {MD2Colors} from 'react-native-paper';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: MD2Colors.transparent}}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </SafeAreaView>
  );
}
export default App;
