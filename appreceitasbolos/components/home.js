import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';

export default function Home(props)
{
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}> As melhores Receitas de Bolo</Text>
      <Image  style={styles.img} source={require('../assets/receitas.jpg')}/>

      <TouchableOpacity style={styles.links1} onPress={()=>{props.navigation.navigate('Chocolate')}}>
        <Text style={styles.texto}>Bolo de Chocolate</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.links2} onPress={()=>{props.navigation.navigate('Milho')}}>
        <Text style={styles.texto}>Bolo de Milho</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.links3} onPress={()=>{props.navigation.navigate('Fuba')}}>
        <Text style={styles.texto}>Bolo de Fuba</Text>
      </TouchableOpacity>

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
  links1:
  {
    fontSize: 30,
    marginTop: 50,  
    textAlign: 'center',
    backgroundColor: '#ff4500',
    borderRadius: 12,
  },
  links2:
  {
    fontSize: 30,
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: '#ff4500',
    borderRadius: 12,
  },
  links3:
  {
    marginTop: 20, 
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#ff4500',
    borderRadius: 12,
  },
  img:
  {
    width: 350,
    height: 340,
  },
  texto:
  {
    fontSize: 30
  }
});