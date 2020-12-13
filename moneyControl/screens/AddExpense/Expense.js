import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import {connect} from 'react-redux';

import Calendar from './Calendar';
import Category from './Category';
import CategoryData from '../../services/CategoryData';
import AmountPad from './AmountPad';
import * as ActionType from '../../action';

class Expense extends React.Component {
  constructor() {
    super();
    this.state = {
      visible_calendar_modal: false,
      visible_category_modal: false,
      expense_date: new Date(),
      date_text: 'Today',
      selected_category: 'Category',
      category_color: '',
      visible_amount_pad: false,
    };
  }

  handle_calendar_modal = (status) =>
    this.setState({visible_calendar_modal: status});

  handle_category_modal = (status) =>
    this.setState({visible_category_modal: status});

  handle_amount_pad = (status) => this.setState({visible_amount_pad: status});

  handle_change_date = (selected_date) => {
    let current_date = new Date();
    current_date.setDate(current_date.getDate() - 1);
    current_date = moment(current_date).format('YYYY-MM-DD');

    let yesterday_date_status = moment(selected_date).isSame(current_date, 'd');
    if (yesterday_date_status) {
      this.setState({expense_date: selected_date, date_text: 'Yesterday'});
    } else {
      let formatted_date = moment(selected_date).format('MMMM Do YYYY');
      this.setState({expense_date: selected_date, date_text: formatted_date});
    }
  };

  handle_change_category = (id) => {
    let selected_category = CategoryData.expense_category_data.filter(
      (category) => category.id === id,
    );
    this.handle_category_modal(false);
    this.setState({
      selected_category: selected_category[0].name,
    });
    this.props.set_category_color(selected_category[0].color);
  };

  render() {
    let {visible_calendar_modal, visible_category_modal} = this.state;
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.handle_calendar_modal(true)}
          style={styles.calendar_container}>
          <AntDesignIcon name="calendar" size={30} color={this.props.color} />
          <Text style={styles.calendar_text}>{this.state.date_text}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.handle_category_modal(true)}
          style={styles.category_container}>
          <MaterialCommunityIcon
            name="view-list"
            size={30}
            color={this.props.color}
          />
          <Text style={styles.category_text}>
            {this.state.selected_category}
          </Text>
        </TouchableOpacity>
        <View style={styles.note_container}>
          <MaterialCommunityIcon
            name="note-text-outline"
            size={30}
            color={this.props.color}
          />
          <TextInput
            placeholder="Add a note"
            multiline
            autoFocus={false}
            style={styles.note_text_input}
          />
        </View>
        <TouchableOpacity
          style={styles.amount_container}
          onPress={() => this.handle_amount_pad(true)}>
          <FontAwesome name="money" size={30} color={this.props.color} />
          <Text style={styles.amount_text}>
            {this.props.amount === '' ? 'Amount' : this.props.amount}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.create_button, {backgroundColor: this.props.color}]}>
          <Text style={styles.create_button_text}>Create</Text>
        </TouchableOpacity>
        <Calendar
          visible={visible_calendar_modal}
          current_date={this.state.expense_date}
          close_modal={() => this.handle_calendar_modal(false)}
          change_date={this.handle_change_date}
        />
        <Category
          visible={visible_category_modal}
          selected_category={this.state.selected_category}
          close_modal={() => this.handle_category_modal(false)}
          change_category={this.handle_change_category}
        />
        <AmountPad
          visible={this.state.visible_amount_pad}
          handle_amount_pad={this.handle_amount_pad}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  calendar_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 17,
  },
  calendar_text: {
    fontFamily: 'Arimo-Regular',
    fontSize: 18,
    marginLeft: 25,
  },
  category_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 17,
  },
  category_text: {
    fontFamily: 'Arimo-Regular',
    fontSize: 18,
    marginLeft: 25,
  },
  note_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  note_text_input: {
    width: '100%',
    marginLeft: 25,
    fontSize: 18,
  },
  amount_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  create_button: {
    marginHorizontal: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 14,
    elevation: 20,
  },
  create_button_text: {
    textAlign: 'center',
    fontSize: 22,
    letterSpacing: 2,
    color: 'white',
  },
  amount_text: {
    fontFamily: 'Arimo-Regular',
    marginLeft: 25,
    fontSize: 18,
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
    set_category_color: (color) => {
      dispatch({
        type: ActionType.SET_CATEGORY_COLOR,
        color: color,
      });
    },
    set_amount: (amount) => {
      dispatch({
        type: ActionType.SET_AMOUNT,
        amount: amount,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
