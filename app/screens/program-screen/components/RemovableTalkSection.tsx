import {Talk} from 'app/api/schedule'
import {TalkSection} from 'app/components/TalkSection'
import {StarIconFilled} from 'app/icons/StarIconFilled'
import {useMyProgramTitles} from 'app/recoil-state/my-program'
import React from 'react'
import {Pressable} from 'react-native'

type Props = {
  talk: Talk
}

export function RemovableTalkSection({talk}: Props) {
  const {updateMyProgramTitles} = useMyProgramTitles()

  return (
    <Pressable onPress={() => updateMyProgramTitles(talk.title)}>
      <TalkSection talk={talk} />
      <StarIconFilled
        color="rgb(221, 255, 87)"
        size={24}
        style={{position: 'absolute', right: 5, top: 0}}
      />
    </Pressable>
  )
}
