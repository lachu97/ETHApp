/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigation from './AppModules/Navigation/Navigation.js';
import store from './AppModules/Redux/store.js';
import {MD2Colors, PaperProvider} from 'react-native-paper';
import {Toast, ToastProvider} from 'react-native-toast-notifications';
function App(): React.JSX.Element {
  return (
    <ToastProvider>
      <PaperProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: MD2Colors.transparent}}>
          <Provider store={store}>
            <AppNavigation />
          </Provider>
        </SafeAreaView>
      </PaperProvider>
    </ToastProvider>
  );
}
export default App;
