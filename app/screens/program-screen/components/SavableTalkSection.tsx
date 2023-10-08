import {Talk} from 'app/api/schedule'
import {Button} from 'app/components/Button'
import {TalkSection} from 'app/components/TalkSection'
import {StarIconFilled} from 'app/icons/StarIconFilled'
import React from 'react'

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
  return (
    <Button onPress={() => updateMyProgramTitles(talk.title)}>
      <TalkSection talk={talk} />
      {existsInMyProgram && (
        <StarIconFilled
          color="rgb(221, 255, 87)"
          size={24}
          style={{position: 'absolute', right: 5, top: 0}}
        />
      )}
    </Button>
  )
}
