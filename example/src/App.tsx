import * as React from 'react';
import { CImage, CScrollView } from 'react-native-fastui';
import CTextUsage from './components/CTextUsage';
import CViewUsage from './components/CViewUsage';
import ButtonUsage from './components/CButtonUsage';
import CTextInputUsage from './components/CTextInputUsage';
import CFlatListUsage from './components/CFlatListUsage';
import CSectionListUsage from './components/CSectionListUsage';

export default function App() {
  return (
    <CScrollView w={'100%'} h={'auto'} p={20} g={20} pv={20}>
      {/* CText component usage **************************************************  */}
      <CTextUsage />

      {/* CView component usage **************************************************  */}
      <CViewUsage />

      {/* CButton component usage ************************************************** */}
      <ButtonUsage />

      {/* CTextInput component usage ********************************************** */}
      <CTextInputUsage />

      {/* CFlatList component usage ************************************************** */}
      <CSectionListUsage />

      {/* CFlatList component usage ************************************************** */}
      <CFlatListUsage />

      {/* CImage component usage ************************************************** */}
      <CImage w={200} of="cover" source={require('./assets/download.jpeg')} />
      <CImage
        w={'80%'}
        of="contain"
        source={{
          uri: 'https://www.shutterstock.com/image-photo/kampala-city-by-night-260nw-1237092538.jpg',
        }}
      />
    </CScrollView>
  );
}
