import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Animated,
  Dimensions,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {TypingAnimation} from 'react-native-typing-animation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      typing_email: false,
      typing_password: false,
      animation_login: new Animated.Value(width - 40),
      enable: true,
    };
  }

  onFocus(value) {
    if (value === 'email') {
      this.setState({typing_email: true, typing_password: false});
    } else {
      this.setState({typing_email: false, typing_password: true});
    }
  }

  _typing() {
    return <TypingAnimation dotColor="#93278f" style={{marginRight: 25}} />;
  }

  _animation() {
    Animated.timing(this.state.animation_login, {
      toValue: 40,
      duration: 240,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      this.setState({
        enable: false,
        typing_email: false,
        typing_password: false,
      });
    }, 150);
  }

  render() {
    const width = this.state.animation_login;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <StatusBar barStyle="light-content" />
          <ImageBackground
            source={require('../assets/images/loginHeader.jpg')}
            style={styles.header_image}>
            <Text
              style={{
                color: 'white',
                fontSize: 50,
                letterSpacing: 2,
                fontFamily: 'TitilliumWeb',
              }}>
              Welcome back
            </Text>
            <Text
              style={{
                color: 'yellow',
                letterSpacing: 2,
                fontSize: 25,
                fontFamily: 'TitilliumWeb',
              }}>
              Sign in to continue
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.footer}>
          <Text style={[styles.title, {marginTop: 50}]}>E-mail</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your email"
              style={styles.text_input}
              onFocus={() => this.onFocus('email')}
            />
            {this.state.typing_email ? this._typing() : null}
          </View>
          <Text style={[styles.title, {marginTop: 20}]}>Password</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your password.."
              secureTextEntry
              style={styles.text_input}
              onFocus={() => this.onFocus('password')}
            />
            {this.state.typing_password ? this._typing() : null}
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
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 2,
    padding: 20,
  },
  header_image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderBottomStartRadius: 80,
    borderBottomEndRadius: 80,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  text_input: {
    flex: 1,
    paddingBottom: 5,
    color: 'gray',
  },
  button_container: {
    alignItems: 'center',
  },
  animation: {
    backgroundColor: '#93278f',
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Login;
