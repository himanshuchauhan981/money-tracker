import React from 'react';
import {Image, Text, View, TextInput, StyleSheet} from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {Formik} from 'formik';
import * as Yup from 'yup';

let schema = Yup.object({
  email: Yup.string().required('Email is required').email('Invalid email'),
});

const VerifyEmail = (props) => {
  return (
    <Formik
      innerRef={props.formRef}
      initialValues={{email: ''}}
      validationSchema={schema}
      onSubmit={(values) => values}>
      {({handleChange, handleBlur, values, errors, touched}) => (
        <View style={styles.forget_password_container}>
          <View style={styles.icon_container}>
            <Image
              source={require('../../assets/images/forget_password.png')}
              style={styles.icon}
            />
          </View>
          <View style={styles.heading_container}>
            <Text style={styles.heading}>Forget your password</Text>
            <Text style={styles.sub_heading}>
              Enter your email address.We will email you OTP to reset your
              password ?
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.text_container}>
              <View style={styles.text_box}>
                <FontistoIcon
                  name="email"
                  size={30}
                  color="#248B86"
                  style={styles.text_icon}
                />
                <TextInput
                  placeholder="Email Address"
                  keyboardType="email-address"
                  style={styles.email_textbox}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              {touched.email && errors.email ? (
                <Text style={styles.error_message}>* {errors.email}</Text>
              ) : null}
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  forget_password_container: {
    flex: 1,
    backgroundColor: '#248B86',
  },
  icon_container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 150,
    height: 150,
  },
  heading_container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 45,
  },
  heading: {
    fontFamily: 'Arimo-Regular',
    fontSize: 25,
    color: 'white',
    letterSpacing: 2,
  },
  sub_heading: {
    textAlign: 'center',
    fontFamily: 'Arimo-Regular',
    color: '#E3E5E5',
    marginTop: 10,
    fontSize: 16,
    letterSpacing: 1,
  },
  footer: {
    flex: 2,
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text_box: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text_container: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
    elevation: 8,
  },
  text_icon: {
    alignSelf: 'center',
  },
  email_textbox: {
    marginLeft: 10,
    flexGrow: 1,
  },
  error_message: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default VerifyEmail;
