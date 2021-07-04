import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';

const LoginScreen = () => {
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');

  const loginHandler = () => {
    Alert.alert(`uname is: ${uname}, pass is: ${pass}`);
  };

  return (
    <View style={[styles.container]}>
      <Text style={{ paddingBottom: 20 }}>Login Page.</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Username'
        onChangeText={(e) => setUname(e)}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Password'
        onChangeText={(e) => setPass(e)}
        secureTextEntry={true}
      />
      <Button
        style={{ paddingTop: 20 }}
        title='Login'
        onPress={loginHandler}
      ></Button>
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
    borderWidth: 2,
    borderBottomEndRadius: 1,
    flexDirection: 'row',
  },
});

export default LoginScreen;
