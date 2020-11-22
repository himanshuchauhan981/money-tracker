import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EnTypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

let expense_category_data = [
  {
    id: '5facf1fcfc13ae4b8360044c',
    name: 'Bills & Fees',
    icon: <FontAwesome5Icon name="money-bill-alt" size={36} color="#E9562F" />,
    color: '#E9562F',
  },
  {
    id: '5facf1fcfc13ae4b8360044d',
    name: 'Entertainment',
    icon: <MaterialCommunityIcon name="movie" size={36} color="#2FC6E9" />,
    color: '#2FC6E9',
  },
  {
    id: '5facf1fcfc13ae4b8360044e',
    name: 'Education',
    icon: <FontAwesome5Icon name="graduation-cap" size={36} color="#F9BD11" />,
    color: '#F9BD11',
  },
  {
    id: '5facf1fcfc13ae4b8360044f',
    name: 'Family',
    icon: <FontistoIcon name="persons" size={36} color="#2F72E9" />,
    color: '#2F72E9',
  },
  {
    id: '5facf1fcfc13ae4b83600450',
    name: 'Food & Drink',
    icon: <Ionicon name="fast-food" size={36} color="#C70039" />,
    color: '#C70039',
  },
  {
    id: '5facf1fcfc13ae4b83600451',
    name: 'Gift',
    icon: <FontAwesome5Icon name="gift" size={36} color="#F911F5" />,
    color: '#F911F5',
  },
  {
    id: '5facf1fcfc13ae4b83600452',
    name: 'Groceries',
    icon: <MaterialIcon name="local-grocery-store" size={36} color="#581845" />,
    color: '#581845',
  },
  {
    id: '5facf1fcfc13ae4b83600453',
    name: 'Healthcare',
    icon: <FontAwesome5Icon name="hospital-alt" size={36} color="#EE7B28" />,
    color: '#EE7B28',
  },
  {
    id: '5facf1fcfc13ae4b83600454',
    name: 'Insurance',
    icon: <EnTypoIcon name="shield" size={36} color="#327A79" />,
    color: '#327A79',
  },
  {
    id: '5facf1fcfc13ae4b83600455',
    name: 'Loans',
    icon: <MaterialIcon name="attach-money" size={36} color="#31B681" />,
    color: '#31B681',
  },
  {
    id: '5facf1fcfc13ae4b83600456',
    name: 'Other',
    icon: <FontAwesomeIcon name="question" size={36} color="#5CAB5D" />,
    color: '#5CAB5D',
  },
  {
    id: '5facf1fcfc13ae4b83600457',
    name: 'Travels',
    icon: (
      <MaterialCommunityIcon name="wallet-travel" size={36} color="#6289C1" />
    ),
    color: '#6289C1',
  },
];

module.exports = {expense_category_data};
