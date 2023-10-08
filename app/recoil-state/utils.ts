import AsyncStorage from '@react-native-async-storage/async-storage'
import {AtomEffect} from 'recoil'

async function loadPersisted<T>(
  key: string,
  setSelf: (_: T) => void,
): Promise<void> {
  const savedValue = await AsyncStorage.getItem(key)

  if (savedValue !== null) {
    const value = await JSON.parse(savedValue)
    setSelf(value)
  }
}

export function asyncStorageWithSetSelfEffect<T>(key: string): AtomEffect<T> {
  return ({setSelf, onSet}) => {
    loadPersisted(key, setSelf)

    onSet(newValue => {
      AsyncStorage.setItem(key, JSON.stringify(newValue))
    })
  }
}
