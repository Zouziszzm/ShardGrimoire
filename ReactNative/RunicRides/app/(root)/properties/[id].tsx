import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Property = () => {

  const {id} = useLocalSearchParams();

  return (
    <View>
      <text> Property {id}</text>
    </View>
  )
}

export default Property
