import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

const OTPScreen = () => {
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
        <OTPTextInput
          textInputStyle={styles.otp_text_input}
          tintColor="white"
          offTintColor="white"
        />
        <Text style={styles.resend_text}>
          If you didn't receive a code!
          <Text style={{fontFamily: 'Arimo-Bold', color: 'blue'}}> Resend</Text>
        </Text>
      </View>
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
    paddingHorizontal: 60,
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
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default OTPScreen;
