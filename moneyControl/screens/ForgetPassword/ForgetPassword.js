import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import OTPScreen from './OTPScreen';
import VerifyEmail from './VerifyEmail';

const ForgetPassword = () => {
  const [otp, set_opt_screen] = React.useState(false);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 14}}>{!otp ? <VerifyEmail /> : <OTPScreen />}</View>
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
          onPress={() => set_opt_screen(true)}
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
