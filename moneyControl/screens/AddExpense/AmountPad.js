import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomSheet} from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableRipple} from 'react-native-paper';

const AmountPad = (props) => (
  <BottomSheet isVisible={props.visible}>
    <View style={styles.pad_container}>
      <View style={styles.pad_row}>
        <TouchableRipple
          style={styles.button}
          centered={true}
          onPress={() => console.log('button clicked')}
          rippleColor="green">
          <Text style={styles.button_text}>Add</Text>
        </TouchableRipple>
        <TouchableRipple
          style={styles.button}
          centered={true}
          rippleColor="red"
          onPress={() => props.handle_amount_pad(false)}>
          <Text style={styles.button_text}>Cancel</Text>
        </TouchableRipple>
      </View>
      <View style={styles.pad_row}>
        <TouchableOpacity style={styles.pad_button}>
          <Text style={styles.pad_text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pad_button}>
          <Text style={styles.pad_text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pad_button}>
          <Text style={styles.pad_text}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pad_row}>
        <TouchableOpacity style={styles.pad_button}>
          <Text style={styles.pad_text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pad_button}>
          <Text style={styles.pad_text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pad_button}>
          <Text style={styles.pad_text}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pad_row}>
        <TouchableOpacity style={styles.pad_button}>
          <Text style={styles.pad_text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pad_button}>
          <Text style={styles.pad_text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pad_button}>
          <Text style={styles.pad_text}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pad_row}>
        <TouchableOpacity style={styles.pad_button}>
          <Text style={styles.pad_text}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pad_button}>
          <Text style={styles.pad_text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.pad_button, styles.clear_button]}>
          <FontAwesome5Icon name="backspace" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  </BottomSheet>
);

const styles = StyleSheet.create({
  pad_container: {flex: 1},
  pad_row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'stretch',
  },
  pad_button: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  pad_text: {
    fontFamily: 'Arimo-Regular',
    fontSize: 30,
  },
  clear_button: {
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    fontFamily: 'Arimo-Bold',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button_text: {
    fontFamily: 'Arimo-Regular',
    color: 'black',
    letterSpacing: 1,
    fontSize: 20,
  },
});

export default AmountPad;
