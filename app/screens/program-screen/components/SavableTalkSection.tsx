import {Talk} from 'app/api/schedule'
import {Button} from 'app/components/Button'
import {TalkSection} from 'app/components/TalkSection'
import {AnimatedStarIconFilled} from 'app/icons/AnimatedStarIconFilled'
import React, {useEffect} from 'react'
import {useSharedValue} from 'react-native-reanimated'

type Props = {
  talk: Talk
  updateMyProgramTitles: (title: string) => void
  myProgramTitles: string[]
}

export function SavableTalkSection({
  talk,
  updateMyProgramTitles,
  myProgramTitles,
}: Props) {
  const starIconSizeSharedValue = useSharedValue(0)

  useEffect(() => {
    const existsInMyProgram = myProgramTitles.includes(talk.title)
    if (existsInMyProgram) {
      starIconSizeSharedValue.value = 24
    } else {
      starIconSizeSharedValue.value = 0
    }
  }, [myProgramTitles, starIconSizeSharedValue, talk.title])

  return (
    <Button onPress={() => updateMyProgramTitles(talk.title)}>
      <TalkSection talk={talk} />
      <AnimatedStarIconFilled
        color="rgb(221, 255, 87)"
        sizeSharedValue={starIconSizeSharedValue}
        style={{position: 'absolute', right: 5, top: 0}}
      />
    </Button>
  )
}
