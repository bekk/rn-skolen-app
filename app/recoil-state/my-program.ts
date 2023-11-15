import {atom, useRecoilState} from 'recoil'
import {asyncStorageWithSetSelfEffect} from 'app/recoil-state/utils'

const MY_PROGRAM_TITLES_KEY = 'MY_PROGRAM_TITLES_KEY'

export const myProgramTitlesAtom = atom<string[]>({
  key: MY_PROGRAM_TITLES_KEY,
  default: [],
  effects: [asyncStorageWithSetSelfEffect(MY_PROGRAM_TITLES_KEY)],
})

export function useMyProgramTitles() {
  const [myProgramTitles, setMyProgramTitles] =
    useRecoilState(myProgramTitlesAtom)

  function updateMyProgramTitles(currentTitle: string) {
    setMyProgramTitles(prev => {
      if (prev.includes(currentTitle)) {
        return prev.filter(title => title !== currentTitle)
      }
      return [currentTitle, ...prev]
    })
  }

  return {updateMyProgramTitles, myProgramTitles}
}
