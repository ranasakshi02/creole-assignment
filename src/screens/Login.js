import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import TextInputField from '../components/TextInputField';
import ButtonLarge from '../components/ButtonLarge';
import {login, loginSuccess, loginUser} from '../models/action';

import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [isemail, setisemail] = useState(false);
  const [ispassword, setispassword] = useState(false);

  const handleLogin = () => {
    console.log(userData);
    dispatch(login(userData.email, userData.password));
    setUserData({
      email: '',
      password: '',
    });
    navigation.navigate('Dashboard');
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <StatusBar backgroundColor={'#038B12'} barStyle={'light-content'} />
        <SafeAreaView style={styles.mainContainer}>
          <View
            style={{
              backgroundColor: '#038B12',
              height: 164,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}></View>
          <View style={{marginTop: 30}}>
            <View style={styles.viewContainer}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: '#1B1C1E',
                }}>
                SignIn
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  marginTop: 7,
                  marginBottom: 20,
                  color: '#1B1C1E',
                }}>
                Please enter below details to signin
              </Text>
              {/* <View style={{marginTop: 7}}>
                <Text style={styles.labelTxt}>Email</Text>
                <TextInput
                  placeholder="Enter Email"
                  onChangeText={value => {
                    setemail(value);
                  }}
                  keyboardType="email-address"
                  style={styles.txtInput}
                />
                {isemail ? (
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '500',
                      marginBottom: 10,
                      color: '#D32F2F',
                    }}>
                    Enter valid email
                  </Text>
                ) : (
                  ''
                )}
              </View>
              <View style={{marginTop: 7}}>
                <Text style={styles.labelTxt}>Password</Text>

                <TextInput
                  placeholder="Enter Password"
                  onChangeText={value => {
                    setpassword(value);
                  }}
                  secureTextEntry={true}
                  keyboardType="default"
                  style={styles.txtInput}
                />
                {ispassword ? (
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '500',
                      marginBottom: 10,
                      color: '#D32F2F',
                    }}>
                    Enter valid Password
                  </Text>
                ) : (
                  ''
                )}
              </View>

              <TouchableOpacity
                style={[styles.btnView]}
                activeOpacity={0.8}
                disabled={email && password ? false : true}
                onPress={() => onPressSignIn()}>
                <Text
                  style={[
                    styles.btnText,
                    {opacity: email && password ? 1 : 0.5},
                  ]}>
                  SignIn
                </Text>
              </TouchableOpacity> */}
              <View>
                <TextInputField
                  placeholder="Enter Email"
                  onChangeText={value =>
                    setUserData({...userData, email: value})
                  }
                  keyboardType="default"
                />
                <TextInputField
                  placeholder="Enter Password"
                  onChangeText={value =>
                    setUserData({...userData, password: value})
                  }
                  keyboardType="default"
                  secureTextEntry={true}
                />
              </View>
              <ButtonLarge
                text={'Signin'}
                disabled={!(userData.email && userData.password)}
                opacity={userData.email && userData.password ? 1 : 0.5}
                onPress={handleLogin}
              />

              <Text
                style={{
                  textAlign: 'center',
                  color: '#4F4F4F',
                  marginVertical: 8,
                }}>
                Don't Have an account?{' '}
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#2D9CDB',
                    marginVertical: 8,
                  }}
                  onPress={() => navigation.navigate('Register')}>
                  Signup
                </Text>
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgViewContainer: {alignItems: 'center'},
  imgStyle: {height: 150, width: 150, alignItems: 'center'},

  viewContainer: {
    marginHorizontal: 24,
    marginTop: 10,
    padding: 10,
  },
  txtInput: {
    borderColor: '#4f4f4f',
    borderWidth: 1,
    borderRadius: 4,
    padding: 15,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 16,
    color: '#000',
  },
  signuptxtView: {alignItems: 'center', marginTop: 10},
  labelTxt: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    marginBottom: 3,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
    fontWeight: '700',
    marginVertical: 5,
  },
  btnView: {
    backgroundColor: '#038B12',
    borderRadius: 50,
    borderWidth: 1,
    padding: 10,
    marginTop: 30,
    marginHorizontal: 10,
  },
});
