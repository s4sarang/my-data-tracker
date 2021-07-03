import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={[styles.container]}>
      <Text style={{ paddingBottom: 20 }}>Login Page.</Text>
      <TextInput
        style={[styles.textInput, styles.textInputPadding]}
        placeholder='Username'
      />
      <TextInput
        style={[styles.textInput, styles.textInputPadding]}
        placeholder='Password'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    margin: 8,
    padding: 8,
  },
  textInput: {
    borderStyle: 'solid',
    paddingBottom: 10,
    borderColor: 'grey',
    borderRadius: 2,
    borderWidth: 2,
    flexDirection: 'row',
  },
});

export default LoginScreen;
