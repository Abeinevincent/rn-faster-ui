import * as React from 'react';
import { CImage, CPhoneNumberInput, CScrollView } from 'rn-faster-ui';
import CTextUsage from './components/CTextUsage';
import CViewUsage from './components/CViewUsage';
import ButtonUsage from './components/CButtonUsage';
import CTextInputUsage from './components/CTextInputUsage';

export default function App() {
  return (
    <CScrollView bgc="white" w={'100%'} h={'auto'} p={20} g={20} pv={20}>
      {/* CText component usage **************************************************  */}
      <CTextUsage />
      <CPhoneNumberInput />

      {/* CView component usage **************************************************  */}
      <CViewUsage />

      {/* CButton component usage ************************************************** */}
      <ButtonUsage />

      {/* CTextInput component usage ********************************************** */}
      <CTextInputUsage />

      {/* CFlatList component usage ************************************************** */}
      {/* <CSectionListUsage /> */}

      {/* CFlatList component usage ************************************************** */}
      {/* <CFlatListUsage /> */}

      {/* CImage component usage ************************************************** */}
      <CImage w={190} h={500} source={require('./assets/download.jpeg')} />

      <CImage
        w={200}
        h={200}
        // of="contain"
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
        }}
      />
    </CScrollView>
  );
}
