# CSafeAreaView Component

A custom `SafeAreaView` component with additional styling capabilities to enhance faster styling.

## Props

### `style`

- Type: `ViewStyle`
- Description: Style object for the content container of the SafeAreaView.

### `w`

- Type: `number`
- Default: `screenWidth * 0.9`
- Description: Width of the SafeAreaView. If not provided, it defaults to 90% of the screen width.

### `h`

- Type: `number`
- Default: `screenHeight * 0.9`
- Description: Height of the SafeAreaView. If not provided, it defaults to 90% of the screen height.{\* \*}

### `bgc`

- Type: `string`
- Default: `'red'`
- Description: Background color of the SafeAreaView. If not provided, it defaults to red.

### `...rest`

- Type: `ICSafeAreaView<T>`
- Description: Additional props passed to the SafeAreaView component. These props should conform to the `ICSafeAreaView` type.

### [CView Props](../view/CView.md)

## Example Usage

```jsx
import React from 'react';
import { CSafeAreaView } from './path/to/CSafeAreaView';
import { StyleSheet } from 'react-native';

const data = [...]; // Your data array

const renderItem = ({ item }) => (
  // Render your item here
);

const MyComponent = () => {
  return (
    <CSafeAreaView
      data={data}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      w={300}
      h={400}
      bgc="blue"
    >

    </CSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // Your custom content container styles
  },
});

export default MyComponent;
```
