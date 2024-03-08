import React from 'react';
import { CButton, CText } from 'react-native-fastui';

type ItemData = {
  id: string;
  title: string;
};

type CButtonProps = {
  item: ItemData;
};

export const CustomButton: React.FC<CButtonProps> = ({ item }) => (
  <CButton
    onPress={() => console.log('pressed item')}
    ph={40}
    w={'100%'}
    mv={5}
    bgc={'purple'}
  >
    <CText fs={20} c={'white'}>
      {item.title}
    </CText>
  </CButton>
);
