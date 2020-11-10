import React from 'react';
import {StyleSheet, View} from 'react-native';
import Progress from 'react-native-spinkit';

let Spinner = (props) => {
  return (
    <View style={styles.spinner}>
      <Progress
        isVisible={props.spin}
        color="#93278F"
        size={40}
        type="ChasingDots"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
});

export default Spinner;
