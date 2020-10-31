import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Signup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Sign up</Text>
          <Text style={styles.sub_heading}>Welcome to all</Text>
        </View>
        <View style={styles.body}>
          <View style={[styles.text_container, {marginBottom: 15}]}>
            <View style={styles.text_box}>
              <Fontisto
                name="person"
                size={30}
                color="#93278f"
                style={{alignSelf: 'center'}}
              />
              <TextInput
                style={{marginLeft: 10, flexGrow: 1}}
                placeholder="Full name"
              />
            </View>
          </View>
          <View style={[styles.text_container, {marginBottom: 15}]}>
            <View style={styles.text_box}>
              <Fontisto
                name="mobile-alt"
                size={30}
                color="#93278f"
                style={{alignSelf: 'center'}}
              />
              <TextInput
                keyboardType="number-pad"
                style={{marginLeft: 10, flexGrow: 1}}
                placeholder="Mobile number"
              />
            </View>
          </View>
          <View style={[styles.text_container, {marginBottom: 15}]}>
            <View style={styles.text_box}>
              <Fontisto
                name="email"
                size={20}
                color="#93278f"
                style={{alignSelf: 'center'}}
              />
              <TextInput
                style={{marginLeft: 10, flexGrow: 1}}
                placeholder="Email address"
                keyboardType="email-address"
              />
            </View>
          </View>
          <View style={[styles.text_container, {marginBottom: 15}]}>
            <View style={styles.text_box}>
              <Fontisto
                name="key"
                size={20}
                color="#93278f"
                style={{alignSelf: 'center'}}
              />
              <TextInput
                style={{marginLeft: 10, flexGrow: 1}}
                placeholder="Password"
              />
            </View>
          </View>
          <View style={styles.text_container}>
            <View style={styles.text_box}>
              <Fontisto
                name="key"
                size={20}
                color="#93278f"
                style={{alignSelf: 'center'}}
              />
              <TextInput
                style={{marginLeft: 10, flexGrow: 1}}
                placeholder="Confirm password"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button_container}>
            <Text style={styles.button_text}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footer_text}>Or</Text>
          <View style={styles.icon_container}>
            <TouchableOpacity style={styles.icon_box}>
              <FontAwesome name="facebook-f" size={30} color="#3b5998" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon_box}>
              <FontAwesome name="google" size={30} color="#db3236" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon_box}>
              <FontAwesome name="twitter" size={30} color="#00acee" />
            </TouchableOpacity>
          </View>
          <Text style={styles.account}>
            Have an account ? <Text style={styles.login_text}>LOG IN</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f8f8',
  },
  header: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  heading: {
    fontFamily: 'TitilliumWeb',
    fontSize: 50,
    letterSpacing: 2,
  },
  sub_heading: {
    fontFamily: 'TitilliumWeb',
    fontSize: 25,
    letterSpacing: 2,
  },
  body: {
    flex: 3,
    paddingHorizontal: 20,
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
    backgroundColor: '#93278f',
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    color: 'white',
    fontSize: 20,
    letterSpacing: 2,
  },
  footer: {
    flex: 1.5,
    paddingHorizontal: 20,
  },
  footer_text: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 10,
  },
  icon_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  icon_box: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    elevation: 6,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  account: {
    marginTop: 20,
    fontFamily: 'TitilliumWeb',
    fontSize: 15,
    textAlign: 'center',
  },
  login_text: {
    color: '#93278f',
    fontWeight: 'bold',
    textDecorationColor: '#93278f',
  },
});

export default Signup;
