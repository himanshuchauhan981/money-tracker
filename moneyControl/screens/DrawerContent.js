import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {Avatar, ListItem, Overlay} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

const DrawerContent = (props) => {
  let [visible, set_visible] = React.useState(false);

  let toggle_overlay = () => {
    set_visible(!visible);
  };

  let signout_user = async () => {
    await AsyncStorage.removeItem('token');
    toggle_overlay();
    props.navigation.dispatch(
      CommonActions.reset({index: 0, routes: [{name: 'Initial'}]}),
    );
  };

  return (
    <View style={styles.drawer}>
      <ImageBackground
        source={require('../assets/images/moneyBackground.jpg')}
        style={{flex: 1}}
      />
      <View style={styles.drawer_header}>
        <Avatar
          rounded
          size="large"
          source={{
            uri:
              'https://icon-library.com/images/user-image-icon/user-image-icon-17.jpg',
          }}
        />
        <Text style={styles.name}>Himanshu Chauhan</Text>
        <Text style={styles.email}>himanshuchauhan981@gmail.com</Text>
      </View>
      <View style={styles.drawer_content}>
        <ListItem style={{backgroundColor: 'red'}} topDivider bottomDivider>
          <Avatar
            rounded
            icon={{
              name: 'home',
              type: 'font-awesome',
              color: 'black',
              size: 20,
            }}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.list_title}>Home</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <Avatar
            rounded
            icon={{
              name: 'settings',
              type: 'MaterialIcons',
              color: 'black',
              size: 20,
            }}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.list_title}>Setting</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <Avatar
            rounded
            icon={{
              name: 'info',
              type: 'Feather',
              color: 'black',
              size: 20,
            }}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.list_title}>About</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
      <View style={styles.drawer_footer}>
        <ListItem
          topDivider
          onPress={() => {
            props.navigation.toggleDrawer();
            toggle_overlay();
          }}>
          <Avatar
            rounded
            size="medium"
            icon={{name: 'logout', type: 'MaterialIcons', color: 'black'}}
          />
          <ListItem.Content>
            <ListItem.Title>Sign Out</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggle_overlay}
        overlayStyle={styles.overlay_container}>
        <View style={{padding: 10}}>
          <Text style={styles.overlay_heading}>Confirm Sign Out</Text>
          <Text style={styles.overlay_error}>
            User, you are signing out of your account on this device.
          </Text>
          <View
            style={styles.overlay_button_container}
            onStartShouldSetResponder={signout_user}>
            <View style={styles.overlay_button}>
              <Text style={styles.overlay_button_text}>SignOut</Text>
            </View>
            <View
              style={styles.overlay_button}
              onStartShouldSetResponder={toggle_overlay}>
              <Text style={styles.overlay_button_text}>Cancel</Text>
            </View>
          </View>
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  drawer_header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  name: {
    marginTop: 5,
    fontFamily: 'Arimo-Bold',
    fontSize: 22,
    color: 'black',
  },
  email: {
    fontFamily: 'Arimo-Regular',
    fontSize: 13,
  },
  drawer_content: {
    flex: 2,
  },
  drawer_footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  list_title: {
    color: 'black',
    fontSize: 19,
    fontFamily: 'TitilliumWeb',
  },
  overlay_container: {
    borderRadius: 15,
    margin: 20,
  },
  overlay_heading: {
    fontFamily: 'Arimo-Bold',
    fontSize: 22,
  },
  overlay_error: {
    fontFamily: 'TitilliumWeb',
    fontSize: 17,
    marginTop: 5,
  },
  overlay_button_text: {
    fontFamily: 'Arimo-Bold',
    fontSize: 18,
    color: '#2C5CD5',
    textAlign: 'center',
  },
  overlay_button_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  overlay_button: {
    flex: 1,
    paddingVertical: 10,
  },
});

export default DrawerContent;
