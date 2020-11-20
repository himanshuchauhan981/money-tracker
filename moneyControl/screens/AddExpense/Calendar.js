import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Divider, Overlay} from 'react-native-elements';
import moment from 'moment';

const CustomCalendar = (props) => {
  let {current_date} = props;
  return (
    <Overlay
      isVisible={props.visible}
      onBackdropPress={props.close_modal}
      overlayStyle={styles.calendar_overlay}>
      <View>
        <View style={styles.day_container}>
          <Text style={styles.day}>{moment(current_date).format('dddd')}</Text>
        </View>
        <Divider />
        <View style={styles.date_container}>
          <Text style={styles.month}>
            {moment(current_date).format('MMMM')}
          </Text>
          <Text style={styles.date}>{moment(current_date).format('Do')}</Text>
          <Text style={styles.year}>{moment(current_date).format('YYYY')}</Text>
        </View>
        <View style={styles.calendar_container}>
          <Calendar
            enableSwipeMonths={true}
            current={moment(current_date).format('YYYY-MM-DD')}
            onDayPress={(data) => props.change_date(data.dateString)}
          />
        </View>
        <TouchableOpacity
          onPress={props.close_modal}
          style={styles.calendar_button}>
          <Text style={styles.button_text}>Done</Text>
        </TouchableOpacity>
      </View>
    </Overlay>
  );
};

let styles = StyleSheet.create({
  calendar_overlay: {padding: 0},
  day_container: {
    paddingVertical: 10,
    backgroundColor: '#CC38C6',
  },
  day: {
    fontFamily: 'TitilliumWeb',
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    letterSpacing: 1,
  },
  date_container: {
    backgroundColor: '#CC38C6',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 10,
  },
  date: {
    fontFamily: 'TitilliumWeb',
    fontSize: 60,
    color: 'white',
    letterSpacing: 1,
  },
  year: {
    fontFamily: 'TitilliumWeb',
    fontSize: 30,
    color: 'white',
    letterSpacing: 1,
  },
  month: {
    fontFamily: 'TitilliumWeb',
    fontSize: 35,
    color: 'white',
    letterSpacing: 1,
  },
  calendar_container: {
    paddingHorizontal: 15,
  },
  calendar_button: {
    paddingVertical: 14,
    backgroundColor: '#E7E1E1',
  },
  button_text: {
    fontFamily: 'Arimo-Bold',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default CustomCalendar;
