# CButton Component

The `CButton` component is a customizable button component designed for use in React Native applications.

## Props

### Common Props

- `style`: Custom styles to be applied to the button.
- `children`: The content to be displayed inside the button.

### Additional Props

- `isIconButton`: A boolean indicating whether the button should be rendered as an icon button.
- `w` (Optional): Width of the button. Accepts a number or string representing width. Default: '90%'.
- `h` (Optional): Height of the button. Accepts a number or string representing height. Default: screenHeight \* 0.06.
- `bgc` (Optional): Background color of the button. Accepts a color value or string representing color code. Default: 'green'.
- `ai` (Optional): Alignment of items inside the button. Accepts one of: 'auto', 'flex-start', 'flex-end', 'center', 'stretch'. Default: 'center'.
- `jc` (Optional): Justification of content inside the button. Accepts one of: 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'. Default: 'center'.
- Other style-related props inherited from [CButton Component Documentation](../view/CView.md).

### Non-Style Related Props

Other props that are not part of the style object can still be passed normally e.g `activeOpacity`, `nextFocusRight`,`nextFocusLeft`, etc.
Because the component extends all the props of React Native's `TouchableOpacity` which in turn extends `TouchableWithoutFeedback`'s props, you can pass them all normally.

## Default Styles

- `w`: Default width is '90%'.
- `h`: Default height is screenHeight \* 0.06.
- `bgc`: Default background color is 'green'.
- `ai`: Default align items is 'center'.
- `jc`: Default justify content is 'center'.

## Examples

```jsx
import * as React from 'react';

// import { StyleSheet, View } from 'react-native';
import { CButton, CIcon, CText } from 'react-native-fast-ui';

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
        w={50}
        h={50}
        isIconButton={true} // optional prop that makes it icon button
        bgc={'green'}
        ai="center"
        jc="center"
        br={100}
        ml={17}
      />

      {/* customised icon button */}
      <CButton
        w={50}
        h={50}
        isIconButton={true}
        bgc={'green'}
        ai="center"
        jc="center"
        br={100}
        ml={17}
        children={<CIcon name="user" color="white" family="FontAwesome5" />}
      />

      {/* Customised button to render both an icon and text */}
      <CButton
        w={'50%'}
        ai="center"
        jc="center"
        g={8}
        fd="row"
        children={
          <>
            <CText ta="center" va="middle" c="white" fs={16}>
              Custom Button
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
```
