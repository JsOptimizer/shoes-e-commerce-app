import { View, Text, ScrollView } from "react-native";
import React, { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const home: FC<Props> = (props) => {
  return (
    <SafeAreaView className="px-4 h-full bg-[#f5f5f5]">
      <ScrollView>
        <View>
          <Text>home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
