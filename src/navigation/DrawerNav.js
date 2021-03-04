import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNav from './TabNav';
import LogoutScreen from '../screen/auth/LogoutScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator initialRouteName="Feed">
            <Drawer.Screen name="Feed" component={TabNav}/>
            <Drawer.Screen name="Account" component={LogoutScreen}/>
        </Drawer.Navigator>
    );
}
 
export default DrawerNav;