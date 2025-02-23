import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import Animated, {
  useAnimatedStyle,
  SharedValue,
} from "react-native-reanimated";

type Props = {
  circleX: SharedValue<number>;
};

const circleContainerSize = 56;

const AnimatedCircle: FC<Props> = (props) => {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: props.circleX.value - circleContainerSize / 2 },
      ],
    };
  }, []);
  return <Animated.View style={[circleContainerStyle, styles.container]} />;
};

export default AnimatedCircle;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -circleContainerSize / 1.1,
    width: circleContainerSize,
    borderRadius: circleContainerSize,
    height: circleContainerSize,
    backgroundColor: "#0ea5e9",
    justifyContent: "center",
    alignItems: "center",
  },
});
