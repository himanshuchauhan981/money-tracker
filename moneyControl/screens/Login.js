import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Animated,
  Dimensions,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import * as Animatable from 'react-native-animatable';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: {value: '', error: ''},
      password: {value: '', error: ''},
      animation_login: new Animated.Value(width - 40),
      enable: true,
    };
  }

  _animation() {
    let validateState = this.validateFields();
    if (!validateState) {
      Animated.timing(this.state.animation_login, {
        toValue: 40,
        duration: 240,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        this.setState({
          enable: false,
        });
      }, 150);
    }
  }

  onTextChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  validateFields = () => {
    let error = false;
    let {email, password} = this.state;
    if (email.value === '') email.error = 'Required field';
    else email.error = '';
    if (password.value === '') password.error = 'Required field';
    else password.error = '';

    if (email.error !== '' || password.error !== '') {
      error = true;
    }
    this.setState({email, password});
    return error;
  };

  render() {
    const width = this.state.animation_login;
    const {email, password} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <StatusBar barStyle="light-content" />
          <Text style={styles.heading}>Welcome!</Text>
          <Text style={styles.subHeading}>Sign in to continue</Text>
        </View>
        <View style={styles.footer}>
          <View style={[styles.text_container, {marginBottom: 20}]}>
            <View style={styles.text_box}>
              <FontistoIcon
                name="email"
                size={30}
                color="#93278f"
                style={{alignSelf: 'center'}}
              />
              <TextInput
                placeholder="Email Address"
                style={{marginLeft: 10, flexGrow: 1}}
                onChangeText={(text) => this.onTextChange('email', text)}
              />
            </View>
            {email.error ? (
              <Text style={styles.error_message}>* {email.error}</Text>
            ) : null}
          </View>
          <View style={styles.text_container}>
            <View style={styles.text_box}>
              <FontistoIcon
                name="email"
                size={30}
                color="#93278f"
                style={{alignSelf: 'center'}}
              />
              <TextInput
                secureTextEntry
                placeholder="Password"
                style={{marginLeft: 10, flexGrow: 1}}
                onChangeText={(text) => this.onTextChange('password', text)}
              />
            </View>
            {password.error ? (
              <Text style={styles.error_message}>* Required field</Text>
            ) : null}
          </View>

          <TouchableOpacity onPress={() => this._animation()}>
            <View style={styles.button_container}>
              <Animated.View style={[styles.animation, {width}]}>
                {this.state.enable ? (
                  <Text style={styles.login_text}>Login</Text>
                ) : (
                  <Animatable.View animation="bounceIn" delay={50}>
                    <FontAwesome name="check" color="white" size={20} />
                  </Animatable.View>
                )}
              </Animated.View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f8f8',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 50,
    letterSpacing: 2,
    fontFamily: 'TitilliumWeb',
  },
  subHeading: {
    letterSpacing: 2,
    fontSize: 25,
    fontFamily: 'TitilliumWeb',
  },
  footer: {
    flex: 2,
    padding: 20,
  },
  text_container: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
    elevation: 8,
  },
  text_box: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button_container: {
    alignItems: 'center',
  },
  animation: {
    backgroundColor: '#93278f',
    paddingVertical: 15,
    marginTop: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 1,
  },
  error_message: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default Login;
