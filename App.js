import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo'
import {Poppins_400Regular, Poppins_600SemiBold, useFonts} from '@expo-google-fonts/poppins'
import AppStack from './src/routes/AppStack.js';


export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }else{
    return (
      <>
      <AppStack/>
      <StatusBar style="auto" />
      </>
  );
}
}
