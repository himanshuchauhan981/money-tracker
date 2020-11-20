import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Overlay} from 'react-native-elements';
import {Divider} from 'react-native-paper';
import {connect} from 'react-redux';

import CategoryData from '../../services/CategoryData';

const Category = (props) => {
  let renderCategoryItem = ({item}) => (
    <TouchableOpacity
      style={styles.category_box}
      onPress={() => props.change_category(item.id)}>
      {item.icon}
      <Text style={styles.icon_heading}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <Overlay
      isVisible={props.visible}
      onBackdropPress={props.close_modal}
      overlayStyle={styles.overlay}>
      <View>
        <View style={[styles.overlay_header, {backgroundColor: props.color}]}>
          <Text style={styles.overlay_heading}>{props.selected_category}</Text>
        </View>
        <Divider style={styles.divider} />
        <FlatList
          data={CategoryData.expense_category_data}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={renderCategoryItem}
        />
      </View>
    </Overlay>
  );
};

let styles = StyleSheet.create({
  overlay: {
    width: Dimensions.get('screen').width - 35,
    borderRadius: 10,
    elevation: 18,
    padding: 0,
  },
  overlay_header: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  overlay_heading: {
    fontFamily: 'Arimo-Bold',
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 12,
    color: 'white',
    letterSpacing: 1,
  },
  category_box: {
    minWidth: (Dimensions.get('window').width - 45) / 3,
    maxWidth: (Dimensions.get('window').width - 45) / 3,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  icon_heading: {
    fontFamily: 'Arimo-Regular',
    fontSize: 14,
    marginTop: 5,
    color: '#AEB1B6',
  },
  divider: {backgroundColor: 'black'},
});

const mapStateToProps = (state) => {
  return {
    color: state.userReducer.category_color,
  };
};

export default connect(mapStateToProps)(Category);
