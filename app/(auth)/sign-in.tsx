import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/form-field";
import CustomBtn from "@/components/CustomBtn";
import googleIcon from "@/assets/icons/Group 108.png";
import arrowIcon from "@/assets/icons/Arrow.png";
import { Link, router } from "expo-router";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <SafeAreaView className="px-4 h-full bg-[#f5f5f5]">
      <ScrollView>
        <View className="flex-row">
          <TouchableOpacity className="bg-white rounded-full  p-2 flex items-center justify-center">
            <Link href={"/"}>
              <Image source={arrowIcon} />
            </Link>
          </TouchableOpacity>
        </View>

        <View className="flex flex-col h-[85vh]">
          <View className="gap-16 mt-14">
            <View className="gap-2">
              <Text className="text-center text-3xl font-bold">
                Hello Again!
              </Text>
              <Text className="text-center text-neutral-500">
                Welcome Back You've Been Missed!
              </Text>
            </View>

            <View className="gap-8">
              <FormField
                label="Email Address"
                placeholder="example@.mail.com"
              />
              <View className="gap-1">
                <FormField label="Password" />
                <Link
                  href={"/password-recovery"}
                  className="text-right text-neutral-500"
                >
                  Recovery Password
                </Link>
              </View>

              <View className="gap-8">
                <CustomBtn
                  title="Sign In"
                  containerStyle="items-center"
                  textStyle="font-bold"
                  handlePress={() => router.push("/(tabs)")}
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
            <Text>Don't have an Account?</Text>
            <Link href={"/sign-up"} className="font-bold">
              Sign Up for free
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
