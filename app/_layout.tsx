
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'
import 'react-native-reanimated';
import { TokenCache } from '@clerk/clerk-expo/dist/cache/types';




const createTokenCache = (): TokenCache => {
  return {
    getToken: async (key: string) => {
      try {
        const item = await SecureStore.getItemAsync(key)
        if (item) {
          console.log(`${key} was used 🔐 \n`)
        } else {
          console.log('No values stored under key: ' + key)
        }
        return item
      } catch (error) {
        console.error('secure store get item error: ', error)
        await SecureStore.deleteItemAsync(key)
        return null
      }
    },
    saveToken: (key: string, token: string) => {
      return SecureStore.setItemAsync(key, token)
    },
  }
}

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!
  
  useFonts({
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-regular': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
  })
  return (
     <ClerkProvider tokenCache={createTokenCache()} publishableKey={publishableKey}>
        <ClerkLoaded>
          <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="login/index" options={{headerShown: false}}/>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>

          </Stack>
        </ClerkLoaded>
     </ClerkProvider>
  );
}
