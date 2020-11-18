import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Calendar from './Calendar';
import Category from './Category';

const Expense = () => {
  let [visibleModal, setModal] = React.useState(false);
  let [visibleCategory, setCategory] = React.useState(false);

  let close_modal = () => setModal(false);

  let close_category_modal = () => setCategory(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setModal(true)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 17,
        }}>
        <AntDesignIcon name="calendar" size={30} />
        <Text
          style={{fontFamily: 'Arimo-Regular', fontSize: 18, marginLeft: 25}}>
          Today
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCategory(true)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 17,
        }}>
        <MaterialCommunityIcon name="view-list" size={30} />
        <Text
          style={{fontFamily: 'Arimo-Regular', fontSize: 18, marginLeft: 25}}>
          Category
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <MaterialCommunityIcon name="note-text-outline" size={30} />
        <TextInput
          placeholder="Add a note"
          multiline
          autoFocus={false}
          style={{
            width: '100%',
            marginLeft: 25,
            fontSize: 18,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <FontAwesome name="money" size={30} />
        <TextInput
          placeholder="Amount"
          keyboardType="number-pad"
          autoFocus={false}
          style={{
            width: '100%',
            marginLeft: 25,
            fontSize: 18,
          }}
        />
      </View>
      <Calendar visible={visibleModal} close_modal={close_modal} />
      <Category visible={visibleCategory} close_modal={close_category_modal} />
    </View>
  );
};

export default Expense;
