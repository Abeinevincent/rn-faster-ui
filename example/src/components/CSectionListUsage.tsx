import React from 'react';
import { StatusBar } from 'react-native';
import { CSafeAreaView, CSectionList, CText, CView } from 'rn-fast-ui';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const CSectionListUsage = () => (
  <CSafeAreaView pt={StatusBar.currentHeight} mh={16}>
    <CSectionList
      w={'auto'}
      h={'auto'}
      // bgc={'white'}
      p={20}
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <CView bgc={'#f9c2ff'} ph={50} mv={8}>
          <CText fs={24}>{item}</CText>
        </CView>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <CText c="black" fs={25} bgc={'white'}>
          {title}
        </CText>
      )}
    />
  </CSafeAreaView>
);

export default CSectionListUsage;
