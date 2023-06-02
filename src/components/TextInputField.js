import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';

export default function TextInputField(props) {
  return (
    <View style={[styles.action, props.style]}>
      <TextInput
        placeholder={props.placeholder}
        defaultValue={props.defaultValue ? props.defaultValue : null}
        placeholderTextColor={'#939090'}
        maxLength={props.maxLength}
        style={[
          styles.textInput,
        ]}
        autoCapitalize="none"
        onChangeText={props.onChangeText}
        value={props.value}
        editable={true}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#939090',
    marginTop: 10
  },
  textInput: {
    flex: 1,
    color: '#4F4F4F',
    fontFamily: 'Lato-Regular',
    paddingVertical: Platform.OS === 'ios' ? 15 : null,
    paddingStart: Platform.OS === 'ios' ? 5 : null,
  },
  touchableChange: {
    alignSelf: 'center',
  },
  textChange: {
    color: '#2D9CDB',
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 14,
  },
});
