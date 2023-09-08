import {useEffect, useState} from 'react'
import codePush from 'react-native-code-push'

export function useCodePushDescription() {
  const [description, setDescription] = useState<string>('No codepush')

  useEffect(() => {
    setCodePushDescription()
  }, [])

  async function setCodePushDescription() {
    const codePushMetadata = await codePush.getUpdateMetadata()
    if (codePushMetadata && codePushMetadata.description) {
      setDescription(codePushMetadata.description)
    }
  }

  return description
}
