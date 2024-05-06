import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaView, StatusBar} from "react-native";
import SplashScreen from "../screen/Splashcreen/SplashScreen";

import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../screen/LoginScreen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen/RegisterScreen";


const Stack = createStackNavigator()

function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
    )
}

function appNavigator() {
    return (
<SafeAreaView style={{flex: 1}}>
    <StatusBar style="auto"/>
    <NavigationContainer>
        <StackNavigation/>
    </NavigationContainer>
</SafeAreaView>
    )
}
export default appNavigator