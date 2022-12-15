import React, {useState, useRef} from 'react';
import {
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import useAuthStore from '../stores/useAuthStore';

const LoginScreen = ({navigation}: any) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = useRef<TextInput>(null);
  const {login} = useAuthStore();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      console.log('Please fill Email');
      return;
    }
    if (!userPassword) {
      console.log('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend: any = {email: userEmail, password: userPassword};
    let formBody: any = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    login({token: 'dummy-token'});
  };

  const submitLogin = (formBody: any) => {
    fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          // AsyncStorage.setItem('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          navigation.replace('DrawerNavigationRoutes');
        } else {
          setErrortext(responseJson.msg);
          console.log('Please check your email id or password');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View className="flex items-center bg-white">
      <ImageBackground
        source={require('../../assets/cover.jpg')}
        resizeMode="cover"
        className="w-[100%] h-[100%] opacity-80 bg-red-600">
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View className="bg-gray-500 m-4 p-4 rounded-3xl">
            <KeyboardAvoidingView enabled>
              <View className="flex flex-row justify-center items-center">
                <Text className="text-center text-4xl font-bold text-red-400 leading-loose tracking-wider">
                  The Elves Store
                </Text>
              </View>
              <View className="h-12 m-5 flex flex-row">
                <TextInput
                  className="border border-gray-300 flex-1 px-4 rounded-lg text-white font-semibold"
                  onChangeText={UserEmail => setUserEmail(UserEmail)}
                  placeholder="Enter Email" //dummy@abc.com
                  placeholderTextColor="#afafaf"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    passwordInputRef?.current &&
                    passwordInputRef?.current?.isFocused()
                  }
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              <View className="flex flex-row h-12 m-5 ">
                <TextInput
                  className="border border-gray-300 flex-1 px-4 rounded-lg text-white font-semibold"
                  onChangeText={UserPassword => setUserPassword(UserPassword)}
                  placeholder="Enter Password" //12345
                  placeholderTextColor="#afafaf"
                  keyboardType="default"
                  ref={passwordInputRef}
                  onSubmitEditing={Keyboard.dismiss}
                  blurOnSubmit={false}
                  secureTextEntry={true}
                  underlineColorAndroid="#f000"
                  returnKeyType="next"
                />
              </View>
              {errortext != '' ? <Text className="">{errortext}</Text> : null}
              <TouchableOpacity
                className="bg-red-600 px-4 py-3 rounded-lg m-5 h-12"
                activeOpacity={0.5}
                onPress={handleSubmitPress}>
                <Text className="text-white font-medium px-4">LOGIN</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default LoginScreen;
