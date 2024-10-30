import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

type Props = {
    title: string,
    children: React.ReactNode,
    index: number
}

const Box = React.forwardRef(
  (props: any, ref: React.LegacyRef<View>) => {
    return (
      <View style={styles.expandableBox} ref={ref} {...props}>
        {props.children}
      </View>
    );
  }
);

const MyAnimatedView = Animated.createAnimatedComponent(Box);

export default function ExpandableBox({ children, title, index }: Props) {
  const screenWidth = Dimensions.get('window').width;
  const initialHeight = 70; // Height of the box when collapsed (showing only the title)

  // Assuming each child is 50px in height, calculate the expanded height
  const expandedHeight = initialHeight + React.Children.count(children) * 50; 

  const height = useSharedValue(initialHeight);
  const [isExpanded, setIsExpanded] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      width: screenWidth - 40, // Make the width slightly smaller than the screen width
    };
  });

  const handlePress = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      height.value = withSpring(initialHeight);
    } else {
      height.value = withSpring(expandedHeight);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <MyAnimatedView style={[styles.box, animatedStyle]}>
          <Text style={styles.title}>{title}</Text>
          {isExpanded && (
            <View style={styles.childrenContainer}>
              {children}
            </View>
          )}
        </MyAnimatedView>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
  box: {
    backgroundColor: '#262626',
    padding: 20,
    borderRadius: 20,
    marginVertical: 16,
    overflow: 'hidden',
  },
  expandableBox: {
    padding: 10,
  },
  childrenContainer: {
    flexDirection: 'column', // Stack children vertically
    alignItems: 'flex-start',
    marginTop: 10,
  },
});






/*import React, { useRef } from 'react'
import { Animated, Easing, LayoutChangeEvent } from 'react-native'
import { Box } from './box'
type Props = {
    children: React.ReactNode
    isExpanded: boolean
}
const AnimatedBox = Animated.createAnimatedComponent(Box)

export function ExpandableItem({ children, isExpanded }: Props) {
    const height = new Animated.Value(0);
    const opacity = new Animated.ValueXY({ x: 0, y: 0 });
    const shouldExpandInitiallyRef = useRef(isExpanded)
    function handleLayoutChange(event: LayoutChangeEvent) {
        if (shouldExpandInitiallyRef.current) {
            height.setValue(event.nativeEvent.layout.height)
            opacity.setValue(1)
            shouldExpandInitiallyRef.current = false
            return
        }
        const newFooterHeight = event.nativeEvent.layout.height
        const heightAnimation = Animated.timing(height, {
            toValue: newFooterHeight,
            useNativeDriver: false,
            duration: 200,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        })
        const opacityAnimation = Animated.timing(opacity, {
            toValue: isExpanded ? 1 : 0,
            useNativeDriver: false,
            duration: 150,
            easing: Easing.bezier(0, 0.1, 0.3, 1),
            delay: 100,
        })
        const sequence = isExpanded
            ? [heightAnimation, opacityAnimation]
            : [opacityAnimation, heightAnimation]
        const animation = Animated.parallel(sequence)
        animation.start()
    }
    return (
        <div>
            <AnimatedBox height={height} />
            <AnimatedBox
                position="absolute"
                width="100%"
                opacity={opacity}
                onLayout={handleLayoutChange}
            >
                {isExpanded && children}
            </AnimatedBox>
        </div>
    )
}*/




