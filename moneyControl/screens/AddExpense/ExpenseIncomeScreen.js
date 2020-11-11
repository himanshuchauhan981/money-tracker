import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Expense from './Expense';

const ExpenseIncomeScreen = () => {
  let [button, set_button] = React.useState('expense');
  return (
    <View style={styles.container}>
      <View style={styles.button_container}>
        <View
          onStartShouldSetResponder={() => set_button('expense')}
          style={[
            styles.button,
            {marginRight: 10},
            button === 'expense'
              ? styles.active_button
              : styles.un_active_button,
          ]}>
          <Text
            style={[
              styles.button_text,
              button === 'expense'
                ? styles.active_text_color
                : styles.un_active_text_color,
            ]}>
            Expense
          </Text>
        </View>
        <View
          style={[
            styles.button,
            button === 'income'
              ? styles.active_button
              : styles.un_active_button,
          ]}
          onStartShouldSetResponder={() => set_button('income')}>
          <Text
            style={[
              styles.button_text,
              button === 'income'
                ? styles.active_text_color
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
  active_button: {
    borderColor: '#93278f',
    backgroundColor: 'white',
  },
  un_active_button: {
    borderColor: '#C0C0C0',
    backgroundColor: '#E2E4E3',
  },
  active_text_color: {
    color: '#93278F',
  },
  un_active_text_color: {
    color: 'black',
  },
});

export default ExpenseIncomeScreen;
