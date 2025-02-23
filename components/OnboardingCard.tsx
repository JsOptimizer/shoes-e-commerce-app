import { View, Text, Image } from "react-native";
import React from "react";
import Nike from "./Nike";

type TOnboardingCard = {
  id: string;
  image: any;
  title: string;
  description: string;
  index:number
};
const OnboardingCard = ({ description, title, image }: TOnboardingCard) => {
  return (
    <View className="flex-1 w-screen p-4">
      <View className=" relative flex-[0.7] ">
        <View className="absolute ">
          <Nike />
        </View>
        <Image source={image} resizeMode="contain" className="h-full w-auto" />
      </View>
      <View className="flex-[0.3]">
        <Text className="text-6xl font-semibold overflow-hidden">{title}</Text>
        <Text className="text-lg text-neutral-400">{description}</Text>
      </View>
    </View>
  );
};

export default OnboardingCard;
