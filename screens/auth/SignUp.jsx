import React from 'react';
import { View } from 'react-native';
import {  Text } from 'react-native';
import { Button } from 'react-native-elements';
import Background from '../../components/Background';
import TextBox from '../../components/TextBox';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      emailError:"",
      passwordError:"",
      confirmPasswordError:"",
      loading:false
    };
  }

  handleEmailChange = (text) => {
    this.setState({ email: text });
  };

  handlePasswordChange = (text) => {
    this.setState({ password: text });
  };

  handleConfirmPasswordChange = (text) => {
    this.setState({ confirmPassword: text });
  };

  handleSignUpPress = () => {
    this.setState({ loading: true });
  };

  render() {
    return (
      <>
        <Background>
          <Text style={{flex:1}}>Sign Up</Text>
          <View style={{marginBottom:"20%"}}>
          <TextBox
            label={"Email"}
            required
            name={"email"}
            email
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <TextBox
            label={"Password"}
            required
            name={"password"}
            password
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <TextBox
            label={"Confirm Password"}
            required
            name={"confirmPassword"}
            password
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPasswordChange}
          />
          <Button loading={this.state.loading} onPress={this.handleSignUpPress} title={"Sign Up"} ></Button>
          </View>
        </Background>
      </>
    );
  }
}


export default SignUp;