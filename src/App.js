import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
     firebase.initializeApp({
     apiKey: 'AIzaSyDN2_2HIRPiwx9jM3eAQAhbmfyQAD9I00Q',
     authDomain: 'auth-3d3f5.firebaseapp.com',
     databaseURL: 'https://auth-3d3f5.firebaseio.com',
     projectId: 'auth-3d3f5',
     storageBucket: 'auth-3d3f5.appspot.com',
     messagingSenderId: '134352736782'
   });
  }

  render() {
    return (
      <View>
        <Header headerText="Authendication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
