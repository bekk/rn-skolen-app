import React, {useState} from 'react'
import {
  Animated,
  Easing,
  Pressable,
  PressableProps,
  TextStyle,
} from 'react-native'

type Props = Omit<PressableProps, 'style'> & {
  style?: TextStyle
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export function Button({style, ...rest}: Props) {
  const [opacity] = useState(() => new Animated.Value(1))
  const [pressed, setPressed] = useState(false)

  const animateTo = (toValue: number, duration: number) => {
    Animated.timing(opacity, {
      toValue,
      duration,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    }).start()
  }

  const handlePressIn = () => {
    setPressed(true)
    animateTo(0.3, 0)
  }

  const handlePressOut = () => {
    setPressed(false)
    animateTo(1, 200)
  }

  const activeStyles = pressed ? {opacity} : {}

  return (
    <AnimatedPressable
      accessibilityRole="button"
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[style, activeStyles]}
      {...rest}
    />
  )
}
