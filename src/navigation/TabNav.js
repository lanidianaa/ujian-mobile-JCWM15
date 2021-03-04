import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Feed/HomeScreen';
import LiveUpdate from '../screen/Feed/LiveUpdate';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'gray'
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;
                    if(route.name === "Home"){
                        iconName = "home"
                    }else if(route.name === "LiveUpdate"){
                        iconName = "today"
                    }
                    return <Icon name={iconName} type="material" color={color} />
                },
                title: '',
            }
            )}
            
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="LiveUpdate" component={LiveUpdate} />
        </Tab.Navigator>
    );
}
 
export default TabNav;