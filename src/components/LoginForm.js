import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardItem, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    console.log('open');
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(() => {
        this.setState({ error: ' Authendication Failed ' });
      });
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }
  render() {
    console.log(this.state);
    // return (<View><Text>Login Form</Text></View>);
    return (
      <Card>
        <CardItem>
          <Input
          placeholder="user@gmail.com"
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
        </CardItem>
        <CardItem>
          <Input
          placeholder="password"
          label="Password"
          secureTextEntry
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          />
      </CardItem>
      <Text style={styles.errorTextStyle}>
        {this.state.error}
      </Text>
        <CardItem>
          {this.renderButton()}
        </CardItem>
      </Card>
    );
  }

}

const styles = {
 errorTextStyle: {
   fontSize: 20,
   alignSelf: 'center',
   color: 'red'
 }

};
export default LoginForm;
