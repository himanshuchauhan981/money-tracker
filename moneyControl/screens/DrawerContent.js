import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';

const DrawerContent = (props) => {
  return (
    <View style={styles.drawer}>
      <ImageBackground
        source={require('../assets/images/moneyBackground.jpg')}
        style={{flex: 1}}
      />
      <View style={styles.drawerHeader}>
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
      <View style={styles.drawerContent}>
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
            <ListItem.Title style={styles.listTitle}>Home</ListItem.Title>
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
            <ListItem.Title style={styles.listTitle}>Setting</ListItem.Title>
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
            <ListItem.Title style={styles.listTitle}>About</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
      <View style={styles.drawerFooter}>
        <ListItem topDivider>
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
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  drawerHeader: {
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
  drawerContent: {
    flex: 2,
  },
  drawerFooter: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  listTitle: {
    color: 'black',
    fontSize: 19,
    fontFamily: 'TitilliumWeb',
  },
});

export default DrawerContent;
