import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBtn from "@/components/CustomBtn";
import FormField from "@/components/form-field";
import { Link } from "expo-router";
import googleIcon from "@/assets/icons/Group 108.png";
import arrowIcon from "@/assets/icons/Arrow.png";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <SafeAreaView className="px-4 h-full bg-[#f5f5f5]">
      <ScrollView>
        <View className="flex-row">
          <TouchableOpacity className="bg-white rounded-full  p-2 flex items-center justify-center">
            <Link href={"/(auth)/sign-in"}>
              <Image source={arrowIcon} />
            </Link>
          </TouchableOpacity>
        </View>

        <View className="flex flex-col h-[85vh]">
          <View className="gap-16 mt-14">
            <View className="gap-2">
              <Text className="text-center text-3xl font-bold">
                Create Account
              </Text>
              <Text className="text-center text-neutral-500">
                Let’s Create Account Together
              </Text>
            </View>

            <View className="gap-8">
              <FormField label="Your Name" placeholder="John smith" />
              <FormField
                label="Email Address"
                placeholder="example@.mail.com"
              />
              <FormField label="Password" />

              <View className="gap-8">
                <CustomBtn
                  title="Sign In"
                  containerStyle="items-center"
                  textStyle="font-bold"
                />
                <CustomBtn
                  title="Sign in with google"
                  containerStyle="items-center bg-white "
                  textStyle="text-neutral-950 font-bold text-lg"
                  icon={googleIcon}
                  iconPosition="left"
                />
              </View>
            </View>
          </View>

          <View className="mt-auto mx-auto flex-row items-center gap-2">
            <Text>Already have an account?</Text>
            <Link href={"/sign-in"} className="font-bold">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
