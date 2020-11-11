import React from 'react';
import {Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Divider, Overlay} from 'react-native-elements';
import {TouchableHighlight} from 'react-native-gesture-handler';

const Expense = () => {
  let [visibleModal, setModal] = React.useState(false);

  let hideModal = () => setModal(false);

  return (
    <Overlay
      isVisible={visibleModal}
      onBackdropPress={hideModal}
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
        <TouchableHighlight
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
        </TouchableHighlight>
      </View>
    </Overlay>
  );
};

export default Expense;
