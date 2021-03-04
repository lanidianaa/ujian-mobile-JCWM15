import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/action';

const LogoutScreen = () => {
    const dispatch = useDispatch();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 25 }}>
            <Button
                title="Logout"
                buttonStyle={{ backgroundColor: '#ff5e78' }}
                onPress={() => dispatch(logoutAction())}
            />
        </View>
    );
}
 
export default LogoutScreen;