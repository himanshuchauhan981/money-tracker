import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  PixelRatio,
} from 'react-native';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      number: '',
      temp_result: '',
      final_result: 0,
    };
  }

  handle_change = (value) => {
    let ascii_code = value.charCodeAt(0);
    let {number} = this.state;
    let new_value;
    let temp_result;
    if (number === '') {
      new_value = value;
    } else if (ascii_code >= 48 && ascii_code <= 57) {
      let last_char_code = number.charCodeAt(number.length - 1);
      if (last_char_code >= 42 && last_char_code <= 47) {
        new_value = `${number} ${value}`;
      } else {
        new_value = `${number}${value}`;
      }
    } else new_value = `${number} ${value}`;

    try {
      temp_result = eval(new_value);
    } catch (err) {
      temp_result = this.state.temp_result;
    }

    this.setState({number: new_value, temp_result});
  };

  calculate_result = () => {
    try {
      let {temp_result} = this.state;

      this.setState({final_result: temp_result, temp_result: ''});
    } catch (err) {}
  };

  clear_calculator = () => {
    this.setState({final_result: 0, number: '', temp_result: ''});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.screen}>
          <Text style={styles.number}>{this.state.number}</Text>
          <Text style={styles.temp_result}>{this.state.temp_result}</Text>
          <Text style={styles.result}>{this.state.final_result}</Text>
        </View>
        <View style={styles.calculator}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.number_button}
              onPress={this.clear_calculator}>
              <Text style={styles.number_text}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number_button}>
              <Text style={styles.number_text}>(</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.number_button}>
              <Text style={styles.number_text}>)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.handle_change('/')}
              style={[styles.number_button, styles.operator_button]}>
              <Text style={styles.operator_text}>/</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.number_button}
              onPress={() => this.handle_change('7')}>
              <Text style={styles.number_text}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number_button}
              onPress={() => this.handle_change('8')}>
              <Text style={styles.number_text}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number_button}
              onPress={() => this.handle_change('9')}>
              <Text style={styles.number_text}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.handle_change('*')}
              style={[styles.number_button, styles.operator_button]}>
              <Text style={styles.operator_text}>*</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.number_button}
              onPress={() => this.handle_change('4')}>
              <Text style={styles.number_text}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number_button}
              onPress={() => this.handle_change('5')}>
              <Text style={styles.number_text}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number_button}
              onPress={() => this.handle_change('6')}>
              <Text style={styles.number_text}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.number_button, styles.operator_button]}
              onPress={() => this.handle_change('-')}>
              <Text style={styles.operator_text}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.number_button}
              onPress={() => this.handle_change('1')}>
              <Text style={styles.number_text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number_button}
              onPress={() => this.handle_change('2')}>
              <Text style={styles.number_text}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number_button}
              onPress={() => this.handle_change('3')}>
              <Text style={styles.number_text}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.operator_button}
              onPress={() => this.handle_change('+')}>
              <Text style={styles.operator_text}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.number_button, styles.zero_button]}
              onPress={() => this.handle_change('0')}>
              <Text style={styles.number_text}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.decimal_button}
              onPress={() => this.handle_change('.')}>
              <Text style={styles.number_text}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.operator_button, styles.result_button]}
              onPress={this.calculate_result}>
              <Text style={styles.operator_text}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

let device_width = Dimensions.get('window').width / 320;

function normalize_font_size(size) {
  let newSize = size * device_width;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 2,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  number: {
    fontSize: 40,
    color: '#898A8B',
  },
  temp_result: {
    color: 'white',
    fontSize: 20,
  },
  result: {
    fontFamily: 'TitilliumWeb',
    fontSize: normalize_font_size(40),
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
