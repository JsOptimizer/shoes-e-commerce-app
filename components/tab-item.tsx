import { SCREEN_WIDTH } from "@/constants/screen";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Feather from "react-native-vector-icons/Feather";
import usePath from "@/hooks/usePath";
import { getPathXCenterByIndex } from "@/utils/path";
import { FC, useEffect } from "react";
import { Pressable, Text } from "react-native";

type TProps = {
  label: string;
  icon: string;
  index: number;
  activeIndex: number;
  onTabPress: () => void;
};

const ICON_SIZE = 25;
const LABEL_WIDTH = SCREEN_WIDTH / 5;
const AnimatedIcon = Animated.createAnimatedComponent(Feather);

const TabItem: FC<TProps> = ({
  activeIndex,
  icon,
  index,
  label,
  onTabPress,
}) => {
  const { curvedPaths } = usePath();
  const animatedActiveIndex = useSharedValue(activeIndex);
  const iconPosition = getPathXCenterByIndex(curvedPaths, index);
  const labelPosition = getPathXCenterByIndex(curvedPaths, index);

  const tabStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? 35 : 20;
    const iconPositionX = iconPosition - index * ICON_SIZE;
    return {
      width: ICON_SIZE,
      height: ICON_SIZE,
      transform: [
        { translateY: withTiming(translateY) },
        { translateX: iconPositionX - ICON_SIZE / 2 },
      ],
    };
  }, []);
  const labelContainerStyle = useAnimatedStyle(() => {
    const translateY = (animatedActiveIndex.value = 1 === index ? 36 : 100);
    return {
      transform: [
        { translateY: withTiming(translateY) },
        { translateX: labelPosition - LABEL_WIDTH / 2 },
      ],
    };
  });
  const iconColor = useSharedValue(
    activeIndex === index + 1 ? "white" : "rgba(128,128,128,0.8)"
  );

  useEffect(() => {
    animatedActiveIndex.value = activeIndex;
    if (activeIndex === index + 1) {
      iconColor.value = withTiming("white");
    } else {
      iconColor.value = withTiming("rgba(128,128,118,0.8)");
    }
  }, [activeIndex]);
  const animatedIconProps = useAnimatedProps(() => ({
    color: iconColor.value,
  }));
  return (
    <>
      <Animated.View style={[tabStyle]}>
        <Pressable
          testID={`tab${label}`}
          hitSlop={{ top: 30, bottom: 30, left: 50, right: 500 }}
          onPress={onTabPress}
        >
          <AnimatedIcon
            name={icon}
            size={25}
            animatedProps={animatedIconProps}
          />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[labelContainerStyle]}
        className={`absolute items-center w-[${LABEL_WIDTH}px]`}
      >
        <Text className="text-base">{label}</Text>
      </Animated.View>
    </>
  );
};

export default TabItem;
