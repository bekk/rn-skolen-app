import React from 'react';
import codePush from 'react-native-code-push';
import App from './App';

function Main() {
  return <App />;
}

const codePushOptions = {
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
};

const CodePushEnabledMain = () => codePush(codePushOptions)(Main);

export default __DEV__ ? Main : CodePushEnabledMain();
