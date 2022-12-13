import React, {useEffect, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Winner } from '../components/Winner/Winner';

export function RankingScreen() {

  useFocusEffect(
    useCallback(() => {

    }, [])
  );
  
  return (
    <View style={styles.container}>
        <Winner/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'#fff',
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    borderWidth:3,
    borderColor:'#fff',
    borderRadius:30
  },
  gameLabel:{
    color:'#fff',
    textAlign:'center',
    fontSize:22
  },
  winnerLabel:{
    backgroundColor:'#0EC244',
    borderRadius:4,
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    fontSize:30,
    paddig:10
  },
  card:{
    borderRadius:10,
    width: 200, 
    height: 300,
  }
});