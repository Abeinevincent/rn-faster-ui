# CFlatList Component

A custom `FlatList` component with additional styling capabilities to enhance faster styling.

## Props

### `contentContainerStyle`

- Type: `ViewStyle`
- Description: Style object for the content container of the FlatList.

### `w`

- Type: `number`
- Default: `screenWidth * 0.9`
- Description: Width of the FlatList. If not provided, it defaults to 90% of the screen width.

### `h`

- Type: `number`
- Default: `screenHeight * 0.9`
- Description: Height of the FlatList. If not provided, it defaults to 90% of the screen height.

### `bgc`

- Type: `string`
- Default: `'red'`
- Description: Background color of the FlatList. If not provided, it defaults to red.

### `...rest`

- Type: `ICFlatList<T>`
- Description: Additional props passed to the FlatList component. These props should conform to the `ICFlatList` type.

### [CView Props](../view/CView.md)

## Example Usage

```jsx
import React from 'react';
import { CFlatList } from './path/to/CFlatList';
import { StyleSheet } from 'react-native';

const data = [...]; // Your data array

const renderItem = ({ item }) => (
  // Render your item here
);

const MyComponent = () => {
  return (
    <CFlatList
      data={data}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      w={300}
      h={400}
      bgc="blue"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // Your custom content container styles
  },
});

export default MyComponent;
```
