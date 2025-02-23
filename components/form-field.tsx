import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import eyeHide from "@/assets/icons/eye-hide.png";
import eye from "@/assets/icons/eye.png";

type Props = {
  label: string;
  otherStyle?: string;
  value?: string;
  placeholder?: string;
  handleChangeText?: (text: string) => void;
};

const FormField = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <View className={`gap-2 ${props.otherStyle}`}>
      <Text className="text-base font-bold">{props.label}</Text>

      <View className="bg-white  w-full h-16 px-4 rounded-full focus:border-2 focus:border-brand items-center  flex-row">
        <TextInput
          className="flex-1 text-neutral-900 text-base"
          value={props.value}
          onChangeText={props.handleChangeText}
          secureTextEntry={
            props.label.toLowerCase() === "password" && !showPassword
          }
          placeholderTextColor={"#7b7b8b"}
          placeholder={props.placeholder}
        />
        {props.label.toLowerCase() === "password" && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              source={!showPassword ? eye : eyeHide}
              className="w-8 h-8 "
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
