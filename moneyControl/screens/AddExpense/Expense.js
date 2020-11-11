import React from 'react';
import {View} from 'react-native';
import {List} from 'react-native-paper';
import Calendar from './Calendar';

const Expense = () => {
  let [visibleModal, setModal] = React.useState(false);

  let closeModal = () => setModal(false);
  return (
    <View>
      <List.Item
        left={(props) => <List.Icon {...props} icon="calendar" />}
        title="Today"
        onPress={() => setModal(true)}
      />
      <List.Item
        left={(props) => <List.Icon {...props} icon="view-list" />}
        title="category"
      />
      <List.Item
        left={(props) => <List.Icon {...props} icon="note-text-outline" />}
        title="Add a note"
      />
      <Calendar visible={visibleModal} closeModal={closeModal} />
    </View>
  );
};

export default Expense;
