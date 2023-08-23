import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Bg from '../assets/pngs/bg.png'

const BackgroundImage = ({children }) => {
  return (
    <ImageBackground source={Bg} style={styles.container}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default BackgroundImage;