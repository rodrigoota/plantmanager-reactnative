import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

let haru = 'https://instagram.fcgh11-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/163349376_708546349816372_4831546155815529610_n.jpg?tp=1&_nc_ht=instagram.fcgh11-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=Q-xeUY2_QRcAX_pWXdU&edm=AP_V10EAAAAA&ccb=7-4&oh=9c0d6e48acc97d34ec87e5274fb24c06&oe=60A839D9&_nc_sid=4f375e%22';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />    
      <Text>Haru 😻</Text>
      <Image
        style={styles.image}
        source={{
          uri: haru,
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height:200,
    width:200
  }
});
