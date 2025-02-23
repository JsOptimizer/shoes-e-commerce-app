import { View, Text, FlatList } from "react-native";
import React from "react";
import OnboardingCard from "@/components/OnboardingCard";
import { onboardData } from "@/constants";
import CustomBtn from "@/components/CustomBtn";
import OnboardPaginator from "@/components/OnboardPaginator";
import { router } from "expo-router";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const viewabilityConfig = React.useRef({
    itemVisiblePercentThreshold: 50,
    minimumViewTime: 0,
  }).current;

  const viewableItemsChanged = React.useRef(({ viewableItems }: any) => {
    if (viewableItems[0]) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const onPressHandler = () => {
    router.push("/sign-in");
  };

  return (
    <View className="pt-20 h-full pb-10">
      <FlatList
        data={onboardData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <OnboardingCard {...item} index={index} />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <View className="mt-auto p-4 flex flex-row justify-between items-center">
        <OnboardPaginator data={onboardData} currentIndex={currentIndex} />
        <CustomBtn
          disable={currentIndex < 2}
          title={"Get start"}
          handlePress={onPressHandler}
          containerStyle="disabled:bg-brand/30"
        />
      </View>
    </View>
  );
};

export default Onboarding;
