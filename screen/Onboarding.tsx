import { View, Text, FlatList } from 'react-native'
import React from 'react'
import OnboardingCard from '@/components/OnboardingCard'
import { onboardData } from '@/constants'
import CustomBtn from '@/components/CustomBtn'
import OnboardPagination from '@/components/OnboardPagination'

const Onboarding = () => {
  return (
    <View className='pt-20 h-full pb-10'>
      <FlatList
      data={onboardData}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(<OnboardingCard {...item}/>)}
      horizontal
      pagingEnabled
      bounces={false}
      />
      <View className='mt-auto p-4 flex flex-row justify-between items-center'>
        <OnboardPagination/>
        <CustomBtn title='Get start'/>
      </View>
    </View>
  )
}

export default Onboarding