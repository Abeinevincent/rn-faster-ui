# CIcon Component

This component provides a reusable wrapper for rendering icons from various icon families using the `react-native-vector-icons` library.

## Installation

This component utilises `react-native-vector-icons` library which has additional installation instructions which are required to use the component. You can find the [Instructions Here](https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file#installation)

## Props

### Required Props

- `name`: string - The name of the icon.
- `family`: string - The icon family. Supported families include: `FontAwesome5`, `AntDesign`, `Ionicons`, `Entypo`, `FontAwesome`, `Fontisto`, `Feather`, `MaterialIcons`, `MaterialCommunityIcons`, `EvilIcons`, `FontAwesome5Pro`, `FontAwesome6`, `FontAwesome6Pro`, `Foundation`, `Octicons`.

### Optional Props

- `size`: number - The size of the icon. Default is `24`.
- `color`: string - The color of the icon. Default is `'black'`.
- `...rest`: object - Any additional props will be passed down to the underlying icon component.

## Usage

```jsx
import React from 'react';
import { CIcon } from 'rn-faster-ui';

const MyComponent = () => {
  return <CIcon name="home" family="FontAwesome" size={30} color="blue" />;
};
```
