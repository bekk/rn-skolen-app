import App from 'app/App'
import React from 'react'
import codePush from 'react-native-code-push'

// Denne komponenten fungerer som et entry-point for React-koden vår.
// Hvis vi ønsker å legge til providers, for eksempel for logging, så er det vanlig å gjøre det her.
// Foreløpig har vi kun lagt til codepush-logikk, som vi kommer tilbake til senere.

function Main() {
  return <App />
}

const codePushOptions = {
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
}

const CodePushEnabledMain = () => codePush(codePushOptions)(Main)

export default __DEV__ ? Main : CodePushEnabledMain()
