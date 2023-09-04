import React from 'react';
import codePush from 'react-native-code-push';
import App from './App';

function Main() {
  return <App />;
}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
  minimumBackgroundDuration: 60 * 10, // App need to be in background for 10 min
  rollbackRetryOptions: {
    delayInHours: 3,
    maxRetryAttempts: 3,
  },
};

const CodePushEnabledMain = () => codePush(codePushOptions)(Main);

export default __DEV__ ? Main : CodePushEnabledMain();
