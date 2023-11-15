import {Talk} from 'app/api/schedule'
import {Button} from 'app/components/Button'
import {TalkSection} from 'app/components/TalkSection'
import {AnimatedStarIconFilled} from 'app/icons/AnimatedStarIconFilled'
import React from 'react'
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
  const existsInMyProgram = myProgramTitles.includes(talk.title)
  const starIconSizeSharedValue = useSharedValue(existsInMyProgram ? 24 : 0)

  function handlePress() {
    updateMyProgramTitles(talk.title)
    if (existsInMyProgram) {
      starIconSizeSharedValue.value = 0
    } else {
      starIconSizeSharedValue.value = 24
    }
  }

  return (
    <Button onPress={handlePress}>
      <TalkSection talk={talk} />
      <AnimatedStarIconFilled
        color="rgb(221, 255, 87)"
        sizeSharedValue={starIconSizeSharedValue}
        style={{position: 'absolute', right: 5, top: 0}}
      />
    </Button>
  )
}
