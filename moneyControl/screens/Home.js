import React from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import EnTypoIcon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = (props) => {
  return (
    <View>
      <Header
        leftComponent={
          <EnTypoIcon
            name="menu"
            color="white"
            size={35}
            onPress={() => props.navigation.openDrawer()}
          />
        }
        centerComponent={{
          text: 'Dashboard',
          style: {
            fontFamily: 'TitilliumWeb',
            fontSize: 25,
            color: 'white',
            letterSpacing: 1,
          },
        }}
        rightComponent={
          <Ionicons
            name="add"
            color="white"
            size={35}
            onPress={() => props.navigation.push('Add')}
          />
        }
      />
      <Text>Hello</Text>
    </View>
  );
};

export default Home;
