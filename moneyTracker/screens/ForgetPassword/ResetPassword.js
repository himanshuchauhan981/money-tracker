import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import UserService from '../../services/UserService';
import Spinner from '../../components/Spinner';

let schema = Yup.object({
  new_password: Yup.string().required('Required field'),
  confirm_password: Yup.string()
    .required('Required field')
    .oneOf([Yup.ref('new_password'), null], 'Password must match'),
});

const ResetPassword = (props) => {
  let navigation = useNavigation();
  let [spinner, set_spinner] = React.useState(false);

  let update_password = (values) => {
    set_spinner(true);
    let userService = new UserService();
    let email = props.route.params.email;
    userService.update_password(values, {email}).then((res) => {
      set_spinner(false);
      navigation.navigate('PasswordSuccess');
    });
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={{new_password: '', confirm_password: ''}}
      onSubmit={(values) => update_password(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.password_container}>
          <Spinner spin={spinner} />
          <View style={styles.password_header}>
            <Image
              source={require('../../assets/images/reset_password.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.password_body}>
            <Text style={styles.heading}>New Credentials</Text>
            <Text style={[styles.sub_heading, {marginTop: 10}]}>
              Your identity has been verified!
            </Text>
            <Text style={styles.sub_heading}>Set your new password</Text>
          </View>
          <View style={styles.password_footer}>
            <View style={styles.text_container}>
              <View style={styles.text_box}>
                <Entypo
                  name="key"
                  size={30}
                  color="#154A80"
                  style={{alignSelf: 'center'}}
                />
                <TextInput
                  placeholder="New password"
                  secureTextEntry
                  style={{marginLeft: 10, flexGrow: 1}}
                  onChangeText={handleChange('new_password')}
                  onBlur={handleBlur('new_password')}
                  value={values.new_password}
                />
              </View>
              {touched.new_password && errors.new_password ? (
                <Text style={styles.error_message}>
                  * {errors.new_password}
                </Text>
              ) : null}
            </View>
            <View style={styles.text_container}>
              <View style={styles.text_box}>
                <Entypo
                  name="key"
                  size={30}
                  color="#154A80"
                  style={{alignSelf: 'center'}}
                />
                <TextInput
                  placeholder="Confirm password"
                  secureTextEntry
                  style={{marginLeft: 10, flexGrow: 1}}
                  onChangeText={handleChange('confirm_password')}
                  onBlur={handleBlur('confirm_password')}
                  value={values.confirm_password}
                />
              </View>
              {touched.confirm_password && errors.confirm_password ? (
                <Text style={styles.error_message}>
                  * {errors.confirm_password}
                </Text>
              ) : null}
            </View>
            <TouchableOpacity
              style={styles.button_container}
              onPress={handleSubmit}>
              <Text style={styles.button_text}>UPDATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

let styles = StyleSheet.create({
  password_container: {
    flex: 1,
    backgroundColor: '#5EA1E7',
  },
  password_header: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
  },
  password_body: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'Arimo-Bold',
    textAlign: 'center',
    fontSize: 40,
  },
  sub_heading: {
    fontFamily: 'Arimo-Regular',
    textAlign: 'center',
    fontSize: 19,
    letterSpacing: 1,
  },
  password_footer: {
    flex: 6,
    paddingHorizontal: 20,
  },
  text_container: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
    elevation: 8,
    marginBottom: 15,
  },
  text_box: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button_container: {
    paddingVertical: 16,
    borderRadius: 12,
    elevation: 8,
    backgroundColor: '#154A80',
  },
  button_text: {
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
    letterSpacing: 2,
  },
  error_message: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default ResetPassword;
