import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Calculator = () => {
  let [number, set_number] = React.useState('');

  let handle_change = (value) => {
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.number}>25 *30</Text>
        <Text style={styles.result}>450</Text>
      </View>
      <View style={styles.calculator}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.number_button}>
            <Text style={styles.number_text}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number_button}>
            <Text style={styles.number_text}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number_button}>
            <Text style={styles.number_text}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handle_change('/')}
            style={[styles.number_button, styles.operator_button]}>
            <Text style={styles.operator_text}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.number_button}
            onPress={() => handle_change('7')}>
            <Text style={styles.number_text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number_button}
            onPress={() => handle_change('8')}>
            <Text style={styles.number_text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number_button}
            onPress={() => handle_change('9')}>
            <Text style={styles.number_text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handle_change('*')}
            style={[styles.number_button, styles.operator_button]}>
            <Text style={styles.operator_text}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.number_button}
            onPress={() => handle_change('4')}>
            <Text style={styles.number_text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number_button}
            onPress={() => handle_change('5')}>
            <Text style={styles.number_text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number_button}
            onPress={() => handle_change('6')}>
            <Text style={styles.number_text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.number_button, styles.operator_button]}
            onPress={() => handle_change('-')}>
            <Text style={styles.operator_text}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.number_button}
            onPress={() => handle_change('1')}>
            <Text style={styles.number_text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number_button}
            onPress={() => handle_change('2')}>
            <Text style={styles.number_text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.number_button}
            onPress={() => handle_change('3')}>
            <Text style={styles.number_text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operator_button}
            onPress={() => handle_change('+')}>
            <Text style={styles.operator_text}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.number_button, styles.zero_button]}
            onPress={() => handle_change('0')}>
            <Text style={styles.number_text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.decimal_button}
            onPress={() => handle_change('.')}>
            <Text style={styles.number_text}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.operator_button, styles.result_button]}>
            <Text style={styles.operator_text}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 2,
    paddingRight: 20,
    backgroundColor: 'black',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  number: {
    fontSize: 25,
    color: '#898A8B',
  },
  result: {
    fontFamily: 'TitilliumWeb',
    fontSize: 80,
    color: 'white',
  },
  calculator: {
    flex: 3,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  number_button: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 25,
    backgroundColor: 'white',
    elevation: 16,
  },
  decimal_button: {
    paddingHorizontal: 31,
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius: 25,
    elevation: 16,
  },
  number_text: {
    color: 'black',
    fontSize: 25,
  },
  operator_text: {
    color: 'white',
    fontSize: 25,
  },
  operator_button: {
    backgroundColor: '#FF5733',
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  result_button: {
    backgroundColor: '#33B7FF',
  },
  zero_button: {
    flex: 0.7,
    alignItems: 'center',
  },
});

export default Calculator;
