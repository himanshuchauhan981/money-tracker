import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import OTPScreen from './OTPScreen';
import VerifyEmail from './VerifyEmail';
import UserService from '../../services/UserService';

const ForgetPassword = () => {
  let formRef = React.useRef();
  const [otp, set_opt_screen] = React.useState(false);

  let validateEmail = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
      if (formRef.current.isValid) {
        let userService = new UserService();
        let email = formRef.current.values.email;
        userService.generate_otp({email}).then((res) => {
          set_opt_screen(true);
        });
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 14}}>
        {!otp ? (
          <VerifyEmail formRef={formRef} validateEmail={validateEmail} />
        ) : (
          <OTPScreen />
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
        ) : null}

        <Icon
          name="chevron-right"
          type="Entypo"
          raised
          size={30}
          reverse
          color={otp ? '#248B86' : '#03C4A1'}
          onPress={validateEmail}
        />
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
