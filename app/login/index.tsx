import { View, Text, Image, Pressable } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import Colors from '@/constants/Colors'
import { StatusBar } from 'expo-status-bar'
import * as WebBrowser from 'expo-web-browser'
import * as Linking from 'expo-linking'
import { useSSO } from '@clerk/clerk-expo'

export const useWarmUpBrowser = () => {
    useEffect(() => {
        void WebBrowser.warmUpAsync();
        return () => void WebBrowser.coolDownAsync();
    }, []);
}

const Login = () => {
    useWarmUpBrowser();
    useEffect(() => {
        WebBrowser.maybeCompleteAuthSession();
    }, []);

    const { startSSOFlow } = useSSO();

    const onPress = useCallback(async () => {
        try {
            const { createdSessionId, setActive } = await startSSOFlow({
                strategy: 'oauth_google',
                redirectUrl: Linking.createURL('/home'),
            });

            if (createdSessionId) {
            }
        } catch (err) {
            console.error("Error", err);
        }
    }, []);

    return (
        <View style={{ backgroundColor: Colors.WHITE, flex: 1, padding: 0, margin: 0 }}>
            <StatusBar translucent backgroundColor="transparent" />
            <Image source={require('../../assets/images/login.png')}
                style={{ width: '100%', height: 500 }}
            />
            <View style={{ padding: 20, display: "flex", alignItems: "center" }}>
                <Text style={{ fontFamily: "outfit-bold", fontSize: 30, textAlign: "center" }}>
                    Ready to make a new friend?
                </Text>
                <Text style={{ fontFamily: "outfit", fontSize: 18, textAlign: "center", color: Colors.GRAY }}>
                    Let's adopt the pet which you like and make their life happy again
                </Text>
                <Pressable onPress={onPress} style={{
                    padding: 14,
                    marginTop: 100,
                    backgroundColor: Colors.PRIMARY,
                    borderRadius: 14,
                    width: "100%"
                }}>
                    <Text style={{ fontFamily: "outfit-medium", fontSize: 20, textAlign: "center" }}>
                        Get Started
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Login;
