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
import moment from 'moment';

import Calendar from './Calendar';
import Category from './Category';
import CategoryData from '../../services/CategoryData';

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
    };
  }

  handle_calendar_modal = (status) =>
    this.setState({visible_calendar_modal: status});

  handle_category_modal = (status) =>
    this.setState({visible_category_modal: status});

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
    this.setState({
      selected_category: selected_category[0].name,
      category_color: selected_category[0].color,
    });
  };

  render() {
    let {visible_calendar_modal, visible_category_modal} = this.state;
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.handle_calendar_modal(true)}
          style={styles.calendar_container}>
          <AntDesignIcon name="calendar" size={30} />
          <Text style={styles.calendar_text}>{this.state.date_text}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.handle_category_modal(true)}
          style={styles.category_container}>
          <MaterialCommunityIcon name="view-list" size={30} />
          <Text style={styles.category_text}>
            {this.state.selected_category}
          </Text>
        </TouchableOpacity>
        <View style={styles.note_container}>
          <MaterialCommunityIcon name="note-text-outline" size={30} />
          <TextInput
            placeholder="Add a note"
            multiline
            autoFocus={false}
            style={styles.note_text_input}
          />
        </View>
        <View style={styles.amount_container}>
          <FontAwesome name="money" size={30} />
          <TextInput
            placeholder="Amount"
            keyboardType="number-pad"
            autoFocus={false}
            style={styles.amount_text_input}
          />
        </View>
        <TouchableOpacity style={styles.create_button}>
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
  amount_text_input: {
    width: '100%',
    marginLeft: 25,
    fontSize: 18,
  },
  create_button: {
    backgroundColor: '#93278F',
    marginHorizontal: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 14,
  },
  create_button_text: {
    textAlign: 'center',
    fontSize: 22,
    letterSpacing: 2,
    color: 'white',
  },
});

export default Expense;
