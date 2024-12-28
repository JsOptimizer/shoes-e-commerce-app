import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View>
                <Text>onboard</Text>
            </View>
        </ScrollView>
         <StatusBar backgroundColor='#fff' style='dark' />
    </SafeAreaView>
  )
}

export default index