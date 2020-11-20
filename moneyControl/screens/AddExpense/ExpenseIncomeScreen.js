import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

import Expense from './Expense';

const ExpenseIncomeScreen = (props) => {
  let navigation = useNavigation();
  let [button, set_button] = React.useState('expense');
  let active_button = {borderColor: props.color, backgroundColor: 'white'};
  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: props.color}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Add" />
        <Appbar.Action
          icon="calculator"
          onPress={() => navigation.navigate('Calculator')}
        />
      </Appbar.Header>
      <View style={styles.button_container}>
        <View
          onStartShouldSetResponder={() => set_button('expense')}
          style={[
            styles.button,
            {marginRight: 10},
            button === 'expense' ? active_button : styles.un_active_button,
          ]}>
          <Text
            style={[
              styles.button_text,
              button === 'expense'
                ? {color: props.color}
                : styles.un_active_text_color,
            ]}>
            Expense
          </Text>
        </View>
        <View
          style={[
            styles.button,
            button === 'income' ? active_button : styles.un_active_button,
          ]}
          onStartShouldSetResponder={() => set_button('income')}>
          <Text
            style={[
              styles.button_text,
              button === 'income'
                ? {color: props.color}
                : styles.un_active_text_color,
            ]}>
            Income
          </Text>
        </View>
      </View>
      <View>{button === 'expense' ? <Expense /> : <Text>Income</Text>}</View>
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderWidth: 1.5,
    borderRadius: 10,
  },
  button_text: {
    fontFamily: 'Arimo-Bold',
    fontSize: 18,
  },
  un_active_button: {
    borderColor: '#C0C0C0',
    backgroundColor: '#E2E4E3',
  },
  un_active_text_color: {
    color: 'black',
  },
});

const mapStateToProps = (state) => {
  return {
    color: state.userReducer.category_color,
  };
};

export default connect(mapStateToProps)(ExpenseIncomeScreen);
