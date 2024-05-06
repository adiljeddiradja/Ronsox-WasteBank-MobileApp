import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaView, StatusBar} from "react-native";
import SplashScreen from "../screen/Splashcreen/SplashScreen";
import {colors} from "../Shared/constant/colors";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../screen/LoginScreen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen/RegisterScreen";
import OtpScreen from "../screen/OtpScreen/OtpScreen";
import HomeScreen from "../screen/HomeScreen/HomeScreen";
import {Ionicons} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HistoryScreen from "../screen/History/HistoryScreen";
import ProfileScreen from "../screen/Profile/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
function getTabBarIcon(routeName, { color, focused, size }) {
    let name;
    switch (routeName) {
        case "Home":
            name = focused ? "home" : "home-outline"
            break;
        case "History":
            name = focused ? "receipt" : "receipt-outline"
            break;
        case "Profile":
            name = focused ? "person" : "person-outline"
            break;
    }
    return <Ionicons name={name} size={size} color={color} />
}

function TabNavigation() {

    return (
        <Tab.Navigator screenOptions={({ route }) => {
            return {
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.primary,
                tabBarIcon: (opt) => getTabBarIcon(route.name, opt)
            }
        }}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='History' component={HistoryScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    )
}

function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Otp" component={OtpScreen}/>
            <Stack.Screen name="Home" component={TabNavigation}/>
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