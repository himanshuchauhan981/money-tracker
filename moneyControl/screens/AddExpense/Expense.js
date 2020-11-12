import React from 'react';
import {View} from 'react-native';
import {List} from 'react-native-paper';

import Calendar from './Calendar';
import Category from './Category';

const Expense = () => {
  let [visibleModal, setModal] = React.useState(false);
  let [visibleCategory, setCategory] = React.useState(true);

  let close_modal = () => setModal(false);

  let close_category_modal = () => setCategory(false);
  return (
    <View>
      <List.Item
        left={(props) => <List.Icon {...props} icon="calendar" />}
        title="Today"
        onPress={() => setModal(true)}
      />
      <List.Item
        left={(props) => <List.Icon {...props} icon="view-list" />}
        title="Category"
        onPress={() => setCategory(true)}
      />
      <List.Item
        left={(props) => <List.Icon {...props} icon="note-text-outline" />}
        title="Add a note"
      />
      <Calendar visible={visibleModal} close_modal={close_modal} />
      <Category visible={visibleCategory} close_modal={close_category_modal} />
    </View>
  );
};

export default Expense;
