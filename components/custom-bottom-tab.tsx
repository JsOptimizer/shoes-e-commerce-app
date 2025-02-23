import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { interpolatePath } from "react-native-redash";
import Animated, {
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import SVG, { Path } from "react-native-svg";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import usePath from "@/hooks/usePath";
import { getPahCenter } from "@/utils/path";
import { SCREEN_WIDTH } from "@/constants/screen";
import AnimatedCircle from "./animated-circle";
import TabItem from "./tab-item";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const CustomBottomTab: FC<BottomTabBarProps> = ({
  descriptors,
  state,
  navigation,
}) => {
  const { containerPath, curvedPaths, tHeight } = usePath();
  const circleXCoordinate = useSharedValue(0);
  const progress = useSharedValue(1);
  const handleMoveCircle = (currentPath: string) => {
    circleXCoordinate.value = getPahCenter(currentPath);
  };
  const selectIcon = (routeName: string) => {
    switch (routeName) {
      case "":
        break;

      default:
        return "index";
    }
  };
  const animatedProps = useAnimatedProps(() => {
    const currentPath = interpolatePath(
      progress.value,
      Array.from({ length: curvedPaths.length }, (_, idx) => idx + 1),
      curvedPaths
    );
    runOnJS(handleMoveCircle)(currentPath);
    return {
      d: `${containerPath} ${currentPath}`,
    };
  });

  const handleTabPress = (index: number, tab: string) => {
    navigation.navigate(tab);
    progress.value = withTiming(index);
  };
  return (
    <View style={styles.tabBarContainer}>
      <SVG width={SCREEN_WIDTH} height={tHeight} style={styles.shadowMd}>
        <AnimatedPath fill={"white"} animatedProps={animatedProps} />
      </SVG>
      <AnimatedCircle circleX={circleXCoordinate} />
      <View style={[styles.tabItemsContainer, { height: tHeight }]}>
        {state.routes.map((route, idx) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ? options.tabBarLabel : route.name;
          return (
            <TabItem
              key={idx}
              label={label as string}
              icon={selectIcon(route.name) as string}
              activeIndex={state.index + 1}
              index={idx}
              onTabPress={() => handleTabPress(idx + 1, route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default CustomBottomTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
  },
  tabItemsContainer: {
    position: "absolute",
    flexDirection: "row",
    width: "100%",
  },
  shadowMd: {
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 3 },
  },
});
