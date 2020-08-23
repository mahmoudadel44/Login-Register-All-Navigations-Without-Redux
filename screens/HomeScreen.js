import React from 'react';
import {  useNavigation} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Text, View, Button } from 'react-native';
const HomeScreen = () => {
    const navigation = useNavigation()
    return (
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <Text style={styles.headerTextStyle}>Home</Text>
        </View>
     <Animatable.Text style={styles.TextStyle} animation="lightSpeedIn" iterationCount={3}>Home Screen</Animatable.Text>
 
      </View>
    );
  }


  export default HomeScreen


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    headerStyle:{
    backgroundColor:'#009837',
    width:'100%',
    height:50,
    alignItems:'center',
    paddingVertical:15,
    justifyContent:'flex-start',
    },
    TextStyle:{
      fontSize:18,
      fontWeight:'bold',
      color:'#009837',
      marginTop:200
    },
    headerTextStyle:{
      fontSize:18,
      fontWeight:'bold',
      color:'#fff',
    }
  });