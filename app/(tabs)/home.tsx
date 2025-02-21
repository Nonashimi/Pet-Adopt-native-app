import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/Home/Header'

const HomeScreen = () => {
  return (
    <View style = {{
        padding: 20,
        marginTop: 20,
    }}>
        <Header/>
    </View>
  )
}

export default HomeScreen