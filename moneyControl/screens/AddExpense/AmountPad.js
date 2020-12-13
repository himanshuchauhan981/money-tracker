import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomSheet} from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';

import * as ActionType from '../../action';

const AmountPad = (props) => {
  let [disabled_amount, set_disabled_amount] = React.useState(false);

  let change_amount = (amount) => {
    let new_amount;
    set_disabled_amount(props.amount.includes('.'));

    if (props.amount == '' && amount == '.') new_amount = '0.0';
    else if (
      props.amount !== '' &&
      amount == '.' &&
      !props.amount.includes('.')
    )
      new_amount = `${props.amount}.`;
    else if (amount !== '.') {
      new_amount = `${props.amount}${amount}`;
    }

    if (new_amount) props.set_amount(new_amount);
  };

  let remove_amount = () => {
    let new_amount = props.amount.slice(0, -1);
    set_disabled_amount(new_amount.includes('.'));
    props.set_amount(new_amount);
  };

  return (
    <BottomSheet isVisible={props.visible}>
      <View style={styles.pad_container}>
        <View style={[styles.pad_heading, {backgroundColor: props.color}]}>
          <Text style={styles.text_heading}>Amount</Text>
          <AntDesignIcon
            name="close"
            size={18}
            color="white"
            onPress={() => props.handle_amount_pad(false)}
          />
        </View>
        <View style={styles.pad_row}>
          <TouchableOpacity
            style={[styles.pad_button]}
            onPress={() => change_amount(1)}>
            <Text style={styles.pad_text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pad_button}
            onPress={() => change_amount(2)}>
            <Text style={styles.pad_text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pad_button}
            onPress={() => change_amount(3)}>
            <Text style={styles.pad_text}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pad_row}>
          <TouchableOpacity
            style={styles.pad_button}
            onPress={() => change_amount(4)}>
            <Text style={styles.pad_text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pad_button}
            onPress={() => change_amount(5)}>
            <Text style={styles.pad_text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pad_button}
            onPress={() => change_amount(6)}>
            <Text style={styles.pad_text}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pad_row}>
          <TouchableOpacity
            style={styles.pad_button}
            onPress={() => change_amount(7)}>
            <Text style={styles.pad_text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pad_button}
            onPress={() => change_amount(8)}>
            <Text style={styles.pad_text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pad_button}
            onPress={() => change_amount(9)}>
            <Text style={styles.pad_text}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pad_row}>
          <TouchableOpacity
            disabled={disabled_amount}
            style={styles.pad_button}
            onPress={() => change_amount('.')}>
            <Text style={styles.pad_text}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pad_button}
            onPress={() => change_amount(0)}>
            <Text style={styles.pad_text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.pad_button, styles.clear_button]}
            onPress={() => remove_amount()}>
            <FontAwesome5Icon name="backspace" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  pad_container: {flex: 1},
  pad_heading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  text_heading: {
    fontFamily: 'Arimo-Regular',
    fontSize: 20,
    color: 'white',
  },
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
    fontSize: 25,
  },
  clear_button: {
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    color: state.userReducer.category_color,
    amount: state.userReducer.amount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_amount: (amount) => {
      dispatch({
        type: ActionType.SET_AMOUNT,
        amount: amount,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AmountPad);
