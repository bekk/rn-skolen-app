import {Talk} from 'app/api/schedule'
import {TalkSection} from 'app/components/TalkSection'
import {useMyProgramTitles} from 'app/recoil-state/my-program'
import React from 'react'
import {
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
} from 'react-native-reanimated'

type Props = {
  talk: Talk
}

export function RemovableTalkSection({talk}: Props) {
  const {updateMyProgramTitles} = useMyProgramTitles()
  const pressed = useSharedValue(false)
  const offset = useSharedValue(0)

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true
    })
    .onChange(event => {
      offset.value = event.translationX
    })
    .onFinalize(
      (event: GestureStateChangeEvent<PanGestureHandlerEventPayload>) => {
        const shouldRemove = event.velocityX > 1000 && event.translationX > 100

        if (shouldRemove) {
          offset.value = withDecay({velocity: event.velocityX})
          runOnJS(updateMyProgramTitles)(talk.title)
        } else {
          offset.value = withSpring(0)
          pressed.value = false
        }
      },
    )
    .failOffsetY([-2, 2])
    .activeOffsetX([-5, 5])

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
    opacity: pressed.value ? 0.6 : 1,
  }))

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={animatedStyles}>
        <TalkSection talk={talk} />
      </Animated.View>
    </GestureDetector>
  )
}
