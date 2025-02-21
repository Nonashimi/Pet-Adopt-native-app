import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Link, Redirect, useRootNavigationState } from 'expo-router'
import { useUser } from '@clerk/clerk-react'

type Props = {}

const index = (props: Props) => {
  const {user} = useUser();
  const rootNavigation = useRootNavigationState();


  useEffect(() => {
    CheckNavigationLoaded();
  },[]);

  const CheckNavigationLoaded = () => {
    if(!rootNavigation.key) {
      return null;
    }
  }
  return user &&  (
    <View>
      {user
      ? <Redirect href={"/(tabs)/home"} /> 
      : <Redirect href={"/login"} />
      }
    </View>
  )
}

export default index