import { View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  interpolate,
  withTiming,
  Easing,
} from "react-native-reanimated";

type Props = {
  data: any[];
  currentIndex: number;
};

const OnboardPaginator = ({ data, currentIndex }: Props) => {
  const DOT_WIDTH = 10;
  const ACTIVE_DOT_WIDTH = 25;

  return (
    <View className="flex flex-row items-center gap-2">
      {data.map((_, idx) => {
        const animatedDotStyle = useAnimatedStyle(() => {
          const width = withTiming(
            interpolate(
              currentIndex,
              [idx - 1, idx, idx + 1],
              [DOT_WIDTH, ACTIVE_DOT_WIDTH, DOT_WIDTH],
              "clamp"
            ),
            { duration: 300, easing: Easing.inOut(Easing.quad) }
          );

          const opacity = interpolate(
            currentIndex,
            [idx - 1, idx, idx + 1],
            [0.5, 1, 0.5],
            "clamp"
          );

          return {
            width,
            opacity,
          };
        });

        return (
          <Animated.View
            key={idx}
            style={[
              {
                height: 5,
                borderRadius: 100,
                backgroundColor: "#5B9EE1",
              },
              animatedDotStyle,
            ]}
          />
        );
      })}
    </View>
  );
};

export default OnboardPaginator;
