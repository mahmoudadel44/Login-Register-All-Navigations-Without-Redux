import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';

const DetailsSCreen = () => {
  return (
    <View style={styles.container}>
          <View style={styles.headerStyle}>
          <Text style={styles.headerTextStyle}>Details</Text>
        </View>
      <Animatable.Text style={styles.TextStyle} animation="lightSpeedIn" iterationCount={3}>Details SCreen</Animatable.Text>
    </View>
  );
}

export default DetailsSCreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerStyle:{
    backgroundColor:'#ff4d88',
    width:'100%',
    height:50,
    alignItems:'center',
    paddingVertical:15,
    justifyContent:'flex-start',
    },
    TextStyle:{
      fontSize:18,
      fontWeight:'bold',
      color:'#ff4d88',
      marginTop:200
    },
    headerTextStyle:{
      fontSize:18,
      fontWeight:'bold',
      color:'#fff',
    }
});