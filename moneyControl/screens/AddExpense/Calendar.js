import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Divider, Overlay} from 'react-native-elements';

const CustomCalendar = (props) => {
  return (
    <Overlay
      isVisible={props.visible}
      onBackdropPress={props.closeModal}
      overlayStyle={{padding: 0}}>
      <View>
        <View style={{paddingVertical: 10, backgroundColor: '#CC38C6'}}>
          <Text
            style={{
              fontFamily: 'TitilliumWeb',
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
            }}>
            Wednesday
          </Text>
        </View>
        <Divider />
        <View
          style={{
            backgroundColor: '#CC38C6',
            flexDirection: 'column',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontFamily: 'TitilliumWeb',
              fontSize: 35,
              color: 'white',
              letterSpacing: 1,
            }}>
            November
          </Text>
          <Text
            style={{
              fontFamily: 'TitilliumWeb',
              fontSize: 60,
              color: 'white',
              letterSpacing: 1,
            }}>
            11
          </Text>
          <Text
            style={{
              fontFamily: 'TitilliumWeb',
              fontSize: 30,
              color: 'white',
              letterSpacing: 1,
            }}>
            2020
          </Text>
        </View>
        <View style={{paddingHorizontal: 15}}>
          <Calendar />
        </View>
        <TouchableOpacity
          onPress={props.closeModal}
          style={{paddingVertical: 14, backgroundColor: '#E7E1E1'}}>
          <Text
            style={{
              fontFamily: 'Arimo-Bold',
              color: 'black',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </Overlay>
  );
};

export default CustomCalendar;
