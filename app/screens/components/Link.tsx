import React, {useState} from 'react'
import {
  Animated,
  Easing,
  Linking,
  Pressable,
  Text,
  TextStyle,
} from 'react-native'

type Props = {
  children: string
  url: string
  style?: TextStyle
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export function Link({children, url, style}: Props) {
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

  function handlePress() {
    Linking.openURL(url)
  }

  const activeStyles = pressed ? {opacity} : {}

  return (
    <AnimatedPressable
      accessibilityRole="button"
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
      style={activeStyles}>
      <Text style={[{textDecorationLine: 'underline'}, style]}>{children}</Text>
    </AnimatedPressable>
  )
}
