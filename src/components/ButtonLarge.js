import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
export default function ButtonLarge(props) {
  return (
    <View
      style={[{width: '100%', marginTop: '10%', bottom: 10}, props.viewStyle]}>
      <TouchableOpacity
        style={[styles.btnSignIn]}
        onPress={props.onPress}
        disabled={props.disabled}>
        <Text style={[styles.buttonText,{opacity:props.opacity}]}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnSignIn: {
    backgroundColor: "#038B12",
    borderRadius: 40,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    fontStyle: 'normal',
  },
  outline: {
    borderWidth: 1,
  },
});
