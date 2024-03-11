# CSectionList Component

A custom `SectionList` component with additional styling capabilities to enhance faster styling.

## Props

### `contentContainerStyle`

- Type: `ViewStyle`
- Description: Style object for the content container of the SectionList.

### `w`

- Type: `number`
- Description: Width of the SectionList. If not provided, it defaults to 90% of the screen width.

### `h`

- Type: `number`
- Description: Height of the SectionList. If not provided, it defaults to 90% of the screen height.

### `bgc`

- Type: `string`
- Description: Background color of the SectionList. If not provided, it defaults to red.

### `...rest`

- Type: `ICSectionList<T>`
- Description: Additional props passed to the SectionList component. These props should conform to the `ICSectionList` type.

### [CView Props](../view/CView.md)

## Example Usage

```jsx
import React from 'react';
import { CSectionList } from './path/to/CSectionList';
import { StyleSheet } from 'react-native';

const data = [...]; // Your data array

const renderItem = ({ item }) => (
  // Render your item here
);

const MyComponent = () => {
  return (
    <CSectionList
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
