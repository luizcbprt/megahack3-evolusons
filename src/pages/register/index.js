import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Linking  } from 'react-native';


export default function Register() {

  return (
  <>
    <View style={styles.container}>

        <View style={styles.ContainerTitle}>
          <View style={styles.ContainerTitle2}>
              <Text style={styles.title}>EvoluSons</Text>
          </View>
        </View>

        <View style={styles.ContainerBody}>

        <View style={styles.BodyHeader}>
            <View style={styles.HeaderImg}>
              <Image style={styles.img} source={image} />
            </View>
          </View>

        <View style={styles.BodySection}>
          <View style={styles.SectionBar}>
            
            <View style={styles.bar}>
              <TextInput 
              style={styles.input} 
              placeholder={'Email'}  
              placeholderTextColor={'#3366cc'} />
            </View>

            <View style={styles.bar}>
              <TextInput 
              style={styles.input} 
              placeholder={'Senha'} 
              textContentType={'password'} 
              secureTextEntry={true} 
              placeholderTextColor={'#3366cc'} 
              />
            </View>

            <View style={styles.barButton}>
              <Text style={styles.links} >Esqueci minha senha</Text>
            </View>
            
            <View style={styles.barButton}>
              <Button title="Login" style={styles.button} color={'#003366'}/>
            </View>
            
            <View style={styles.barButton}>
              <Text style={styles.links} onPress={()=>{}}>Cadastre-se</Text>
            </View>

          </View>
        </View>
      
        </View>
    </View>
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  title:{
    fontSize:30,
    color:'white',
    fontWeight:'bold',
    paddingTop:40,
    },
  ContainerTitle:{
    flex:.22,
    width:'100%',
    backgroundColor:'#3366cc',
    alignItems: 'center',
    borderBottomLeftRadius:140,
    borderBottomRightRadius:140,
  },
    ContainerTitle2:{
      paddingTop:20,
      flex:.883,
      width:'100%',
      backgroundColor:'#003366',
      alignItems: 'center',
      borderBottomLeftRadius:140,
      borderBottomRightRadius:140,
  },
  ContainerBody:{
    flex:0.8,
    width:'100%',
    alignItems: 'center',
  },
  BodyHeader:{
    flex:0.4,
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
  HeaderImg:{
    flex:0.8,
    width:'50%',
    backgroundColor:'#3366cc',
    borderRadius:200,
    alignItems:'center',
    justifyContent:'center'
  },
  img:{
    width:'80%',
    flex:0.4,
    borderRadius:200,
  },
  BodySection:{
    flex:0.6,
    width:'100%',
  },
  SectionBar:{
    width:'100%',
    flex:1,
    justifyContent:'center',
  },
  bar:{
    flex:0.5,
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    flex:0.7,
    margin:0,
    fontSize:14,
    padding:5,
    width:'60%',
    borderBottomWidth:1
  },
  barButton:{
    paddingTop:10,
    flex:0.5,
    alignItems:'center'
  },
  button:{
    
  },
  links:{
    color:'#003366',
  }
});
