import AsyncStorage from '@react-native-async-storage/async-storage'

const MY_PROGRAM_TITLES_KEY = 'MY_PROGRAM_TITLES_KEY'

export async function updateMyPogramTitles(currentTitle: string) {
  try {
    const storedTitlesJSON = await AsyncStorage.getItem(MY_PROGRAM_TITLES_KEY)

    const storedTitles = (
      storedTitlesJSON ? JSON.parse(storedTitlesJSON) : []
    ) as string[]

    if (storedTitles.includes(currentTitle)) {
      const titlesWithoutCurrentTitle = storedTitles.filter(
        title => title !== currentTitle,
      )

      await AsyncStorage.setItem(
        MY_PROGRAM_TITLES_KEY,
        JSON.stringify(titlesWithoutCurrentTitle),
      )
    } else {
      const updatedTitles = [currentTitle, ...storedTitles]
      await AsyncStorage.setItem(
        MY_PROGRAM_TITLES_KEY,
        JSON.stringify(updatedTitles),
      )
    }
  } catch (e) {
    console.error(e)
  }
}

export async function getStoredMyProgramTitles(): Promise<string[]> {
  try {
    const storedTitlesJSON = await AsyncStorage.getItem(MY_PROGRAM_TITLES_KEY)

    if (!storedTitlesJSON) {
      return []
    }
    return JSON.parse(storedTitlesJSON)
  } catch (e) {
    console.error(e)
    return []
  }
}
