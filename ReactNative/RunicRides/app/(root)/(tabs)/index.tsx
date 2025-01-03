import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className='flex justify-center items-center h-full'>
      <Text className='font-bold text-lg'> welcome</Text>
      <Link href="/Home">Home</Link>
    </View>
  )
}

export default index
