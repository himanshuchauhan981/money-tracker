import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';

import schema from '../schema/signupSchema';

const Signup = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        mobile_number: '',
        email: '',
        password: '',
        confirm_password: '',
      }}
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
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
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
              </View>
              {errors.name ? (
                <Text style={styles.error_message}>* {errors.name}</Text>
              ) : null}
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
                  maxLength={10}
                  onChangeText={handleChange('mobile_number')}
                  onBlur={handleBlur('mobile_number')}
                  value={values.mobile_number}
                />
              </View>
              {errors.mobile_number ? (
                <Text style={styles.error_message}>
                  * {errors.mobile_number}
                </Text>
              ) : null}
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
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              {errors.email ? (
                <Text style={styles.error_message}>* {errors.email}</Text>
              ) : null}
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
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>
              {errors.password ? (
                <Text style={styles.error_message}>* {errors.password}</Text>
              ) : null}
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
                  onChangeText={handleChange('confirm_password')}
                  onBlur={handleBlur('confirm_password')}
                  values={values.confirm_password}
                />
              </View>
              {errors.confirm_password ? (
                <Text style={styles.error_message}>
                  * {errors.confirm_password}
                </Text>
              ) : null}
            </View>
            <TouchableOpacity
              style={styles.button_container}
              onPress={handleSubmit}>
              <Text style={styles.button_text}>Sign up</Text>
            </TouchableOpacity>
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
              Have an account ?{' '}
              <Text
                onPress={() => this.props.navigation.replace('Login')}
                style={styles.login_text}>
                LOG IN
              </Text>
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

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
    flex: 4,
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
  error_message: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default Signup;
