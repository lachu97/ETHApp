/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigation from './AppModules/Navigation/Navigation.js';
import store from './AppModules/Redux/store.js';
import {MD2Colors, PaperProvider} from 'react-native-paper';
import {ToastProvider} from 'react-native-toast-notifications';
import {requestUserPermission} from './AppModules/Notification/Notification.js';
function App(): React.JSX.Element {
  useEffect(() => {
    requestUserPermission().then(r => console.log(r));
  }, []);
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
