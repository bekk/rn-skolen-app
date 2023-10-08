import {atom} from 'recoil'
import {asyncStorageWithSetSelfEffect} from 'app/recoil-state/utils'

const MY_PROGRAM_TITLES_KEY = 'MY_PROGRAM_TITLES_KEY'

export const myProgramTitlesAtom = atom<string[]>({
  key: MY_PROGRAM_TITLES_KEY,
  default: [],
  effects: [asyncStorageWithSetSelfEffect(MY_PROGRAM_TITLES_KEY)],
})
