import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CustomBtn from "@/components/CustomBtn";
import FormField from "@/components/form-field";
import { SafeAreaView } from "react-native-safe-area-context";
import arrowIcon from "@/assets/icons/Arrow.png";
import { Link } from "expo-router";

type Props = {};

const PasswordRecovery = (props: Props) => {
  return (
    <SafeAreaView className="px-4 h-full bg-[#f5f5f5]">
      <ScrollView>
        <View className="flex-row">
          <TouchableOpacity className="bg-white rounded-full  p-2 flex items-center justify-center">
            <Link href={"/sign-in"}>
              <Image source={arrowIcon} />
            </Link>
          </TouchableOpacity>
        </View>
        <View className="flex flex-col h-[85vh]">
          <View className="gap-16 mt-14">
            <View className="gap-2 items-center">
              <Text className="text-center] text-3xl font-bold">
                Recovery Password
              </Text>
              <Text className=" text-neutral-500 w-80 text-center ">
                Please Enter Your Email Address To Recieve a Verification Code
              </Text>
            </View>

            <View className="gap-8">
              <FormField
                label="Email Address"
                placeholder="example@.mail.com"
              />

              <CustomBtn
                title="Continue"
                containerStyle="items-center"
                textStyle="font-bold"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PasswordRecovery;
