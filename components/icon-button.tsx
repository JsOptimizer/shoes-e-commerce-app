import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import React, { FC, useEffect } from "react";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export type TIconLibrary = {
  [key: string]: () => React.ComponentType<any>;
};

const ICON_LIBRARIES: TIconLibrary = {
  Feather: () => Feather,
  MaterialCommunityIcons: () => MaterialCommunityIcons,
};
type TProps = {
  icon: string;
  iconFamily?: "Feather" | "MaterialCommunityIcons";
  variant?: "text" | "contained" | "outline";
  size?: "small" | "medium" | "big";
  iconColor?: string;
  roundness?: "full" | "medium" | "small";
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const IconButton: FC<TProps> = ({
  icon,
  iconColor = "white",
  iconFamily = "Feather",
  onPress,
  roundness = "medium",
  size = "medium",
  style = {},
  variant = "contained",
  ...rest
}) => {
  const Icon = ICON_LIBRARIES[iconFamily]();
  const iconSize = size === "big" ? 24 : size === "medium" ? 16 : 12;
  const buttonSize = size === "big" ? 48 : size === "medium" ? 36 : 24;

  const buttonStyles = [style];
  return (
    <Pressable {...rest} onPress={onPress} style={(pressed) => [buttonStyles]}>
      <Icon name={icon} size={iconSize} color={iconColor} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPress: {
    opacity: 0.9,
  },
  containedButton: {
    backgroundColor: "#2196f3",
  },
  textButton: {
    backgroundColor: "transparent",
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#2196f3",
  },
  fullRoundness: {
    borderRadius: 100,
  },
  mediumRoundness: {
    borderRadius: 20,
  },
  smallRoundness: {
    borderRadius: 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
});
