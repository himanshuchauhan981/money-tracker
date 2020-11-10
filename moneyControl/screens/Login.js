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
import EntypoIcon from 'react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';
import {Formik} from 'formik';
import {Snackbar} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import schema from '../schema/loginSchema';
import UserService from '../services/UserService';
import Spinner from '../components/Spinner';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      animation_login: new Animated.Value(width - 40),
      enable: true,
      snackbar: {show: false, msg: ''},
      spinner: false,
      secure_password: true,
    };
  }

  toggle_snackbar = (show, msg) => {
    this.setState(
      {snackbar: {show: show, msg: msg}},
      () => this.state.snackbar,
    );
  };

  animate_button = async (token) => {
    await AsyncStorage.setItem('token', token);
    Animated.timing(this.state.animation_login, {
      toValue: 40,
      duration: 240,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      this.setState(
        {
          enable: false,
          spinner: false,
        },
        () => this.props.navigation.push('Home'),
      );
    }, 150);
  };

  login_user(userData) {
    let userService = new UserService();

    userService
      .loginUser(userData)
      .then((res) => {
        this.animate_button(res.data.token);
      })
      .catch((err) => {
        this.toggle_snackbar(true, err.response.data.msg);
      });
  }

  change_password_text = () => {
    this.setState((prevState) => ({
      secure_password: !prevState.secure_password,
    }));
  };

  render() {
    const width = this.state.animation_login;
    let {snackbar} = this.state;
    return (
      <Formik
        validationSchema={schema}
        initialValues={{email: '', password: ''}}
        onSubmit={(values) =>
          this.setState({spinner: true}, () => this.login_user(values))
        }>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <Spinner spin={this.state.spinner} />
            <View style={styles.header}>
              <StatusBar barStyle="light-content" />
              <Text style={styles.heading}>Welcome!</Text>
              <Text style={styles.sub_heading}>Sign in to continue</Text>
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
                    keyboardType="email-address"
                    style={{marginLeft: 10, flexGrow: 1}}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                {touched.email && errors.email ? (
                  <Text style={styles.error_message}>* {errors.email}</Text>
                ) : null}
              </View>
              <View style={styles.text_container}>
                <View style={styles.text_box}>
                  <View style={styles.leading_icon}>
                    <FontistoIcon name="key" size={30} color="#93278f" />
                  </View>
                  <View style={{flex: 8, alignSelf: 'stretch'}}>
                    <TextInput
                      secureTextEntry={this.state.secure_password}
                      placeholder="Password"
                      style={{paddingLeft: 10, flexGrow: 1}}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                  </View>
                  <View style={styles.trailing_icon}>
                    <EntypoIcon
                      name={
                        this.state.secure_password ? 'eye' : 'eye-with-line'
                      }
                      size={30}
                      color="#93278F"
                      onPress={this.change_password_text}
                    />
                  </View>
                </View>
                {touched.password && errors.password ? (
                  <Text style={styles.error_message}>* {errors.password}</Text>
                ) : null}
              </View>
              <Text
                onPress={() => this.props.navigation.replace('ForgetPassword')}
                style={styles.forget_password}>
                Forget password ?
              </Text>

              <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.button_container}>
                  <Animated.View
                    style={[
                      styles.animation,
                      this.state.enable
                        ? {borderRadius: 15}
                        : {borderRadius: 100},
                      {width},
                    ]}>
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
              <Text style={styles.account}>
                Don't have an account ?{' '}
                <Text
                  onPress={() => this.props.navigation.replace('Signup')}
                  style={styles.signUp_text}>
                  SIGN UP
                </Text>
              </Text>
            </View>
            <View style={{margin: 20}}>
              <Snackbar
                visible={this.state.snackbar.show}
                onDismiss={() => this.toggle_snackbar(false)}
                action={{
                  label: 'Close',
                  onPress: () => {
                    this.toggle_snackbar(false);
                  },
                }}
                duration={10000}>
                <Text style={{fontSize: 16}}>{snackbar.msg}</Text>
              </Snackbar>
            </View>
          </View>
        )}
      </Formik>
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
  sub_heading: {
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
    paddingVertical: 10,
    marginTop: 30,
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
  account: {
    marginTop: 20,
    fontFamily: 'TitilliumWeb',
    fontSize: 17,
    textAlign: 'center',
  },
  signup_text: {
    color: '#93278f',
    fontWeight: 'bold',
    textDecorationColor: '#93278f',
  },
  forget_password: {
    fontFamily: 'TitilliumWeb',
    fontSize: 16,
    color: '#93278f',
    marginTop: 10,
    textAlign: 'right',
  },
  leading_icon: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  trailing_icon: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default Login;
