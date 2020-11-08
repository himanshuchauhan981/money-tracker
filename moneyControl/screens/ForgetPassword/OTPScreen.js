import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import CountDown from 'react-native-countdown-component';
import {Snackbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import UserService from '../../services/UserService';

const OTPScreen = (props) => {
  let navigation = useNavigation();
  let [error_message, set_error_message] = React.useState('');
  let setOtpValues = (otp) => {
    if (otp.length === 6) {
      let userService = new UserService();
      let values = {otp: otp, email: props.email};
      let params = {type: 'verify_otp'};

      userService.reset_password(values, params).then((res) => {
        if (res.data.msg === 'OTP verified') {
          navigation.navigate('ResetPassword', {email: props.email});
        } else {
          set_error_message(res.data.msg);
        }
      });
    }
  };
  return (
    <View style={styles.otp_container}>
      <View style={styles.otp_header}>
        <Image
          source={require('../../assets/images/otp.png')}
          style={styles.otp_image}
        />
      </View>
      <View style={styles.otp_body}>
        <Text style={styles.text_heading}>Verification code</Text>
        <Text style={styles.text_sub_heading}>
          Please type the verification code sent to your email ID
        </Text>
      </View>
      <View style={styles.otp_footer}>
        <CountDown
          until={props.expiry_time}
          size={20}
          timeToShow={['M', 'S']}
        />
        <OTPTextInput
          handleTextChange={setOtpValues}
          inputCount={6}
          textInputStyle={styles.otp_text_input}
          tintColor="white"
          offTintColor="white"
        />
        <Text style={styles.resend_text}>
          If you didn't receive a code!
          <Text style={{fontFamily: 'Arimo-Bold', color: 'blue'}}> Resend</Text>
        </Text>
      </View>
      <Snackbar
        visible={error_message !== ''}
        onDismiss={() => set_error_message('')}
        action={{
          label: 'Close',
          onPress: () => {
            set_error_message('');
          },
        }}
        duration={10000}>
        <Text style={{fontSize: 16}}>{error_message}</Text>
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  otp_container: {
    flex: 1,
    backgroundColor: '#59BBB7',
  },
  otp_header: {
    flex: 4,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  otp_image: {
    width: 150,
    height: 150,
  },
  otp_body: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 45,
  },
  text_heading: {
    fontFamily: 'Arimo-Bold',
    fontSize: 35,
    color: 'white',
    letterSpacing: 2,
  },
  text_sub_heading: {
    textAlign: 'center',
    fontFamily: 'Arimo-Regular',
    color: '#F1F6F6',
    marginTop: 10,
    fontSize: 18,
    letterSpacing: 1,
  },
  otp_footer: {
    flex: 4,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  otp_text_input: {
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 12,
    borderWidth: 8,
  },
  resend_text: {
    marginTop: 20,
    fontFamily: 'Arimo-Regular',
    fontSize: 15,
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default OTPScreen;
