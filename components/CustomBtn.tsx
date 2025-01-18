import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import React from "react";

type TCustomBtn={
  title:string,
  handlePress?:(event: GestureResponderEvent)=>void,
  containerStyle?:string,
  textStyle?:string
}
const CustomBtn = ({title,handlePress,containerStyle,textStyle}:TCustomBtn) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    className={`bg-brand py-4 px-8 rounded-full ${containerStyle}`}
    >
      <Text className={`text-white font-semibold text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;
