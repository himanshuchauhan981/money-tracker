import React from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import {Overlay} from 'react-native-elements';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';

let width = Dimensions.get('window').width;

const Payment = (props) => {
  let [expanded_card, set_expanded_card] = React.useState(false);

  return (
    <Overlay
      isVisible={props.visible}
      onBackdropPress={() => props.handle_payment_modal(false)}
      overlayStyle={styles.payment_overlay}>
      <View style={[styles.payment_heading, {backgroundColor: props.color}]}>
        <Text style={styles.heading_text}>Payment method</Text>
      </View>
      <List.Item
        title="Cash"
        titleStyle={styles.title}
        onPress={() => props.change_payment_mode('Cash')}
        left={(props) => (
          <Icon {...props} name="cash" size={30} style={styles.list_icon} />
        )}
      />
      <List.Accordion
        title="Card"
        expanded={expanded_card}
        onPress={() => set_expanded_card(!expanded_card)}
        titleStyle={styles.title}
        left={(props) => (
          <Icon
            {...props}
            name="credit-card"
            size={30}
            style={styles.list_icon}
          />
        )}>
        <List.Item
          title="Credit card"
          onPress={() => props.change_payment_mode('Credit')}
          left={(props) => (
            <Icon name="chevron-right" size={30} style={styles.list_icon} />
          )}
        />
        <List.Item
          title="Debit card"
          onPress={() => props.change_payment_mode('Debit')}
          left={(props) => (
            <Icon name="chevron-right" size={30} style={styles.list_icon} />
          )}
        />
      </List.Accordion>
    </Overlay>
  );
};

let styles = StyleSheet.create({
  payment_overlay: {
    padding: 0,
    width: width - 40,
  },
  payment_heading: {
    padding: 15,
  },
  title: {
    fontFamily: 'TitilliumWeb',
    fontSize: 18,
    letterSpacing: 1,
  },
  list_icon: {
    alignSelf: 'center',
    color: 'black',
  },
  heading_text: {
    fontFamily: 'Arimo-Regular',
    fontSize: 18,
    color: 'white',
  },
});

const mapStateToProps = (state) => {
  return {
    color: state.userReducer.category_color,
  };
};

export default connect(mapStateToProps)(Payment);
