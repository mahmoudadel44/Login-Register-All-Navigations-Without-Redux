import React from 'react';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import DetailsSCreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen'
// const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();
// const ProfileStack = createStackNavigator()
// const ExploreStack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#009837',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" size={26} color={color} />),
                }}
            />
            <Tab.Screen
                name="Details"
                component={DetailsSCreen}
                options={{
                    tabBarLabel: 'Details',
                    tabBarColor: '#ff4d88',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" size={26} color={color} />),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#4d88ff',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarColor: '#ffc61a',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="settings" size={26} color={color} />),
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabScreen
