import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/action';
import pic from '../../picture/splash_icon.png';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginBtn = () => {
        if(username !== '' && password !== ''){
            dispatch(loginAction(username));
        }else{
            alert('Please fill your username and password');
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <View>
                <Image source={pic} style={{ height: 200, width: 200 }} />
            </View>
            <View style={{ paddingHorizontal: 35, paddingBottom: 50 }}>
                <Text style={{
                    fontSize: 50,
                    fontWeight: 'bold',
                    color: '#ff5e78'
                }}>
                    Login
                </Text>
            </View>
            <View style={{ paddingHorizontal: 35}}>
                <Text style={{ color: 'white' }}>Username</Text>
                <Input 
                    placeholder="ex. username"
                    style={{ color: 'white' }}
                    onChangeText={(e) => setUsername(e)}
                />
                
                <Text style={{ color: 'white' }}>Password</Text>
                <Input 
                    placeholder="ex. *****"
                    style={{ color: 'white' }}
                    onChangeText={(e) => setPassword(e)}
                />
                <Button
                    title="Login"
                    onPress={loginBtn}
                    buttonStyle={{ backgroundColor: '#ff5e78' }}
                />
            </View>
        </View>
    );
}
 
export default LoginScreen;