import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';

export default function Milho()
{
  return(
    <View  style={styles.container}>
      <Text  style={styles.titulo}>Receita Bolo de Milho</Text>
      <Image style={styles.img} source={require('../assets/milho.jpg')}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#e8c39e',
    padding: 8,
    alignItems: 'center', 
  },
  titulo:
  {
    fontSize: 40,
    color: '#ff4500',
    fontFamily: 'Lato_400Regular',
    marginTop: 20,
    marginBottom: 20, 
    textAlign: 'center'
  },
  img:
  {
    width: 350,
    height: 340,
  },
});