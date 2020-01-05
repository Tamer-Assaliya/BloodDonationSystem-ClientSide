import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
//import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';
import useGoogleAuth from "../hooks/useGoogleAuth";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        case 'signout':
            return { token: null, errorMessage: '' };
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('RequiredUserInfoScreen');
    } else {
        navigate('Signin');
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
};

const signup = dispatch => async ({ email, password }) => {
    try {
        const response =null
            //await trackerApi.post('/signup', { email, googleAccessToken, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });

        navigate('RequiredUserInfoScreen');
    } catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign up'
        });
    }
};

const signin = dispatch => async ({ email, password}) => {
    try {
        const response = null;
        //await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('RequiredUserInfoScreen');
    } catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign in'
        });
    }
};

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('loginFlow');
};

const LoginWithGoogle = dispatch => async () => {
    const signInWithGoogleAsync = useGoogleAuth();
    try {
        const result = await signInWithGoogleAsync();
        //console.log('hi');
        //const email= result.user.email;
        const {accessToken, idToken, refreshToken, user} = result;
        const {name,photoUrl,email} = user;
        console.log(result);
        const response = null;
        //await trackerApi.post('/signin', {email, accessToken,idToken,refreshToken,name,photoUrl});
        dispatch({type: 'signin', payload: response.data.token});
        navigate('RequiredUserInfoScreen');
    }
    catch (e) {
          //  dispatch({ type: 'add_error', payload: 'can not login using google' });
    }
};


export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout, LoginWithGoogle, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);