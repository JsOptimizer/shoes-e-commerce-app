import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";

type TCustomBtn = {
  title: string;
  handlePress?: (event: GestureResponderEvent) => void;
  containerStyle?: string;
  textStyle?: string;
  disable?: boolean;
  iconPosition?: "left" | "right";
  icon?: ImageSourcePropType;
};
const CustomBtn = ({
  title,
  handlePress,
  containerStyle,
  textStyle,
  disable,
  icon,
  iconPosition,
}: TCustomBtn) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`bg-brand py-4 px-8 rounded-full flex flex-row items-center justify-center  ${containerStyle}`}
      disabled={disable}
    >
      {iconPosition === "left" && (
        <Image source={icon} className="w-6 h-6 mr-2" resizeMode="contain" />
      )}
      <Text className={`text-white font-semibold text-lg ${textStyle}`}>
        {title}
      </Text>
      {iconPosition === "right" && (
        <Image source={icon} className="w-6 h-6 ml-2" resizeMode="contain" />
      )}
    </TouchableOpacity>
  );
};

export default CustomBtn;
