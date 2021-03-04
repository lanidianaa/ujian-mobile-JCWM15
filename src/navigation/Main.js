import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { keepLoginAction } from '../redux/action';
import LoginScreen from '../screen/auth/LoginScreen';
import DrawerNav from './DrawerNav';

const Main = () => {
    const dispatch = useDispatch();
    const { isSignedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(keepLoginAction());
    }, [dispatch])
    return (
        <>
        {
            isSignedIn ?
            <DrawerNav />
            :
            <LoginScreen />
        }
        </>
    );
}
 
export default Main;