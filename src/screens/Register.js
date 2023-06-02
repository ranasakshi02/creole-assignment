import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TextInputField from '../components/TextInputField';
import ButtonLarge from '../components/ButtonLarge';
import {register, registerSuccess, registerUser} from '../models/action';
import {useDispatch} from 'react-redux';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleRegister = () => {
    console.log(userData);
    dispatch(register(userData.username, userData.email, userData.password));
    setUserData({username: '', email: '', password: ''});
    navigation.navigate('Login');
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
                Signup
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  marginTop: 7,
                  marginBottom: 20,
                  color: '#1B1C1E',
                }}>
                Please enter below details to signup
              </Text>

              <View>
                <TextInputField
                  placeholder="Enter Username"
                  onChangeText={value =>
                    setUserData({...userData, username: value})
                  }
                  keyboardType="default"
                />
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
                text={'Signup'}
                disabled={
                  !(userData?.username && userData.email && userData.password)
                }
                opacity={
                  userData?.username && userData.email && userData.password
                    ? 1
                    : 0.5
                }
                onPress={handleRegister}
              />

              <Text
                style={{
                  textAlign: 'center',
                  color: '#4F4F4F',
                  marginVertical: 8,
                }}>
                Already Have an account?{' '}
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#2D9CDB',
                    marginVertical: 8,
                  }}
                  onPress={() => navigation.navigate('Login')}>
                  Signin
                </Text>
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
