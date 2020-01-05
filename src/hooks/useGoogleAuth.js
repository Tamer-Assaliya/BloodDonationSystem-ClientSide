import * as Google from 'expo-google-app-auth';

export default () => {
    return async function signInWithGoogleAsync() {
        try {
            const result = await Google.logInAsync({
                //androidClientId: YOUR_CLIENT_ID_HERE,
                iosClientId: "618850086470-as7iefd0ff7iv24tghjurb6gaecioevg.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });


            return result;
        } catch (e) {
            return {type:'cancel'};
        }
    }
};
