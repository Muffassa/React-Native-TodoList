import React from 'react';
import { TextInput, StyleSheet, Platform } from 'react-native';

const FormInput = ({value, onChangeText, onSubmitInput, placeholder}) => (
  <TextInput
    style={styles.textInput}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    onSubmitEditing={onSubmitInput}
  />
);

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    marginTop: 50,
    paddingLeft: 10,
    ...Platform.select({
      ios: {
        borderColor: 'gray',
        borderWidth: 1
      },
    })
  },
});

export default FormInput;