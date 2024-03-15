import 'react-native-gesture-handler';
import * as React from 'react';
import {
  CButton,
  CImage,
  CScrollView,
  CModal,
  CView,
  CPhoneNumberInput,
  useHideSystemNavbar,
  useShowSystemNavbarColorTheme,
  // useAsyncStorageStore,
  // usePortraitLocker,
  useDeviceColorThemeDetector,
} from 'rn-faster-ui';
import CTextUsage from './components/CTextUsage';

export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false);

  useHideSystemNavbar();

  useShowSystemNavbarColorTheme('red', 'light');

  const { themecolor } = useDeviceColorThemeDetector();

  React.useEffect(() => {
    console.log(themecolor);
  }, [themecolor]);

  return (
    <CView h={'100%'}>
      <CScrollView bgc="white" w={'100%'} h={'auto'} p={20} g={20} pv={20}>
        <CButton onPress={() => setModalVisible(!modalVisible)} />

        {/* CText component usage **************************************************  */}
        <CTextUsage />

        <CModal
          // children={<CText children={'Hello modal'} />}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />

        {/* CPhoneNumberInput usage */}
        <CPhoneNumberInput />

        {/* <CSelectUsage /> */}

        {/* CView component usage **************************************************  */}
        {/* <CViewUsage /> */}

        {/* CButton component usage ************************************************** */}
        {/* <ButtonUsage /> */}

        {/* CTextInput component usage ********************************************** */}
        {/* <CTextInputUsage /> */}

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
    </CView>
  );
}
