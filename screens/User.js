import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const User = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/aware-bg-2.png')}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logosContainer: {
    justifyContent: 'flex-start',
    direction: 'rtl',
    flexWrap: 'wrap',

    alignItems: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    padding: 40,
    marginBottom: 30,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  imageContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.70)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    width: 260,
    height: 300,

    overflow: 'hidden',
  },
  logoContainer: {
    width: 230,
    height: 150,
    resizeMode: 'contain',
  },
  contentContainer: {
    alignItems: 'center',

    justifyContent: 'center',

    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },
  awareImage: {
    width: 180,
    height: 40,
    resizeMode: 'contain',
  },
  section: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'rgba(204, 204, 204, 0.78)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
  },
  textInput: {
    flex: 1,
    color: 'black',
    paddingLeft: 10,
  },
  signUp: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textSignUp: {
    color: 'black',
    textAlign: 'center',
  },
});

export default User;
