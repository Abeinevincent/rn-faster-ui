import * as React from 'react';

// import { StyleSheet, View } from 'react-native';
import { CButton, CIcon, CText } from 'rn-fast-ui';
import { primaryColor } from '../utils/colors';

export default function ButtonUsage() {
  return (
    <>
      {/* CButton component ************************************************** */}

      {/*
      
       - Default button
       - Only call the component and it will render with default styles
      
      */}

      <CButton />

      {/* 

      - Customised button
      - Only pass the props you would like to change,
      they will overide the default ones e.g
      default width is 90% or screenWidth * 0.9 incase its rendered adjacent to the 
      screen wrapper with a width of 100% or full screen/device width
      but you can pass any width to overide that

      */}
      <CButton
        w={'60%'}
        bgc={'green'}
        children={
          <CText w="90%" ta="center" c="white" fs={17}>
            Custom Button
          </CText>
        }
      />

      {/* 

      - Icon button uses the same component for a button but accepts an optional 
      isIconButton boolean which when set to true, the default button renders with an icon
      which can also be overidden with a custom icon you pass.
      - Passing isIconButton prop and setting it to true(defaults to false) is 
      mostly helpful on benefiting from the default styles of an icon button, otherwise you
      can as well pass an icon or icon with text as children and provide your own styles to them

      
      */}

      {/* Default Icon button */}
      <CButton
        // w={50}
        // h={50}
        isIconButton={true} // optional prop that makes it icon button
        // bgc={primaryColor}
        // ai="center"
        // jc="center"
        // br={100}
        // ml={17}
      />

      {/* customised icon button */}
      <CButton
        w={50}
        h={50}
        isIconButton={true}
        bgc={primaryColor}
        ai="center"
        jc="center"
        br={100}
        ml={17}
        children={<CIcon name="user" color="white" family="FontAwesome5" />}
      />

      {/* Customised button to render both an icon and text */}
      <CButton
        w={'65%'}
        ai="center"
        jc="center"
        g={8}
        onPress={() => console.log('hey')}
        fd="row"
        children={
          <>
            <CText ta="center" va="middle" c="white" fs={16}>
              Custom Icon Button
            </CText>
            <CIcon
              name="rightcircleo"
              size={25}
              color="white"
              family="AntDesign"
            />
          </>
        }
      />
    </>
  );
}
