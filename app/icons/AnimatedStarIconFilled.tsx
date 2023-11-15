import React from 'react'
import Animated, {
  SharedValue,
  useAnimatedProps,
  withSpring,
} from 'react-native-reanimated'
import Svg, {Path} from 'react-native-svg'
import {StyleProp, ViewStyle} from 'react-native/types'

const AnimatedSvg = Animated.createAnimatedComponent(Svg)

type Props = {
  sizeSharedValue: SharedValue<number>
  color?: string
  style?: StyleProp<ViewStyle>
}

export function AnimatedStarIconFilled({
  sizeSharedValue,
  color = 'black',
  style,
}: Props) {
  const animatedProps = useAnimatedProps(() => ({
    width: withSpring(sizeSharedValue.value, {duration: 1000}),
    height: withSpring(sizeSharedValue.value, {duration: 1000}),
  }))

  return (
    <AnimatedSvg
      viewBox="0 0 512 512"
      style={style}
      animatedProps={animatedProps}>
      <Path
        fill={color}
        d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"
      />
    </AnimatedSvg>
  )
}
