import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';

function Background(props) {
  return (
    <LinearGradient style={styles.container} colors={["#e5e5e5","#425af7"]} >
      {props.children}
    </LinearGradient>
  );
}


export default Background;

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:"red"
    }
})