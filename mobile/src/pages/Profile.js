import React from 'react';
import {WebView } from 'react-native-webview';
import { View } from 'react-native';

// import { Container } from './styles';

export default function Profile({ navigation }) {
  const github_username = navigation.getParam('github_username')
  return (
    <WebView style={{flex:1}} source={{uri: `https://github.com/${github_username}`}} />

  );
}
