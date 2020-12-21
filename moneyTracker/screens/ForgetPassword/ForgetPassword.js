import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';

import OTPScreen from './OTPScreen';
import VerifyEmail from './VerifyEmail';
import UserService from '../../services/UserService';
import Spinner from '../../components/Spinner';

const ForgetPassword = () => {
  let formRef = React.useRef();
  let [otp, set_opt_screen] = React.useState(false);
  let [expiry, set_expiry] = React.useState('');
  let [error, setError] = React.useState('');
  let [email, set_email] = React.useState('');
  let [spinner, set_spinner] = React.useState(false);

  let validateEmail = () => {
    set_spinner(true);
    if (!otp) {
      if (formRef.current) {
        formRef.current.handleSubmit();
        if (formRef.current.isValid) {
          let userService = new UserService();
          let params = {type: 'otp_generate'};
          let email = formRef.current.values.email;
          userService
            .reset_password({email}, params)
            .then((res) => {
              let current_date = new Date();
              let diff = Date.parse(res.data.otp_expiry) - current_date;
              set_spinner(false);
              set_email(email);
              set_expiry(diff / 1000);
              set_opt_screen(true);
            })
            .catch((error) => {
              set_spinner(false);
              setError(error.response.data);
            });
        }
      }
    } else {
    }
  };

  return (
    <View style={{flex: 1}}>
      <Spinner spin={spinner} />
      <View style={{flex: 14}}>
        {!otp ? (
          <VerifyEmail
            formRef={formRef}
            validateEmail={validateEmail}
            error={error}
          />
        ) : (
          <OTPScreen
            expiry_time={expiry}
            email={email}
            set_spinner={set_spinner}
          />
        )}
      </View>
      <View
        style={[
          styles.floating_button,
          otp
            ? {justifyContent: 'space-between', backgroundColor: '#59BBB7'}
            : {justifyContent: 'flex-end', backgroundColor: '#248B86'},
        ]}>
        {otp ? (
          <Icon
            name="chevron-left"
            type="Entypo"
            raised
            size={30}
            reverse
            color="#248B86"
            onPress={() => set_opt_screen(false)}
          />
        ) : (
          <Icon
            name="chevron-right"
            type="Entypo"
            raised
            size={30}
            reverse
            color={otp ? '#248B86' : '#03C4A1'}
            onPress={validateEmail}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  floating_button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 20,
  },
});

export default ForgetPassword;
