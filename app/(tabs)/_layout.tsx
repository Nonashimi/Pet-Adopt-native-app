import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import User from '@expo/vector-icons/FontAwesome';
import Colors from '@/constants/Colors';
const TabLayout = () => {
  return (
    <Tabs
    screenOptions={{tabBarActiveTintColor:Colors.PRIMARY}}
    >
        <Tabs.Screen name="home" options={{
            headerShown: false, 
            title: "Home",
            tabBarIcon: ({color}) => 
                <FontAwesome name="home" size={24} color={color} />
             }}/>
        <Tabs.Screen name="favorite" options={{
            headerShown: false, 
            title: "Favorite",
            tabBarIcon: ({color}) => 
                <AntDesign name="heart" size={20} color={color} />
             }}/>
        <Tabs.Screen name="inbox" options={{
            headerShown: false, 
            title: "Inbox",
            tabBarIcon: ({color}) => 
                <Entypo name="chat" size={24} color={color} />
             }}/>
        <Tabs.Screen name="profile" options={{
            headerShown: false, 
            title: "Profile",
            tabBarIcon: ({color}) => 
                <User name="user" size={24} color={color} />
             }}/>
    </Tabs>
  )
}

export default TabLayout