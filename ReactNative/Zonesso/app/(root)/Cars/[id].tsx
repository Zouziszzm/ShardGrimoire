import { useLocalSearchParams } from 'expo-router'
import React from 'react'

const CARID = () => {

  const {id} = useLocalSearchParams();
  return (
    <div>CARID</div>
  )
}

export default CARID
