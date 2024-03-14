# CSelect Component

The `CSelect` component is a wrapper around the `SelectBox` component from `react-native-multi-selectbox`. It provides a customizable select box for selecting options from a list.

## Props

### `label` (string)

- The label for the select box.

### `options` (Array<{ item: string, id: string }>)

- An array of options to be displayed in the select box. Each option should have an `item` and `id` property.

### `onChange` (function)

- Callback function invoked when the selected value changes.
- Signature: `(val: any) => void`

### `onMultiSelect` (function)

- Callback function invoked when multiple values are selected.
- Signature: `(selectedItems: any[]) => void`

### `inputPlaceholder` (string)

- The placeholder text for the select box input.

### `listEmptyText` (string)

- The text to display when the list of options is empty.

### `width` (string)

- The width of the select box.

### `viewMargin` (string)

- The margin of the select box.

### `onTapClose` (function)

- Callback function invoked when the select box is tapped to close.
- Signature: `() => void`

### `isMulti` (boolean)

- Determines whether multiple values can be selected.
- Default: `false`

### `hideInputFilter` (boolean)

- Determines whether to hide the input filter.
- Default: `false`

### `selectedValues` (Array<any>)

- An array of pre-selected values.

### `value` (any)

- The current selected value.

### `selectIcon` (any)

- Custom icon for the select box.

### `labelStyle` (StyleProp<ViewStyle>)

- Custom style for the label.

### `containerStyle` (StyleProp<ViewStyle>)

- Custom style for the container of the select box.

### `inputFilterContainerStyle` (StyleProp<ViewStyle>)

- Custom style for the input filter container.

### `inputFilterStyle` (StyleProp<ViewStyle>)

- Custom style for the input filter.

### `multiOptionContainerStyle` (StyleProp<ViewStyle>)

- Custom style for the container of multi-select options.

### `multiOptionsLabelStyle` (StyleProp<ViewStyle>)

- Custom style for the label of multi-select options.

### `listEmptyLabelStyle` (StyleProp<ViewStyle>)

- Custom style for the empty list label.

### `multiListEmptyLabelStyle` (StyleProp<ViewStyle>)

- Custom style for the label of empty multi-select options.

### `selectedItemStyle` (StyleProp<ViewStyle>)

- Custom style for the selected item.

### `searchInputProps` ({})

- Additional props to be passed to the search input.

### `multiSelectInputFieldProps` ({})

- Additional props to be passed to the multi-select input field.

### `listOptionProps` ({})

- Additional props to be passed to the list options.

### `arrowIconColor` (string)

- The color of the arrow icon.

### `searchIconColor` (string)

- The color of the search icon.

### `toggleIconColor` (string)

- The color of the toggle icon.

## Usage

```jsx
import React from 'react';
import { CSelect } from './path/to/CSelect';

const ExampleComponent = () => {
  const options = [
    { item: 'Option 1', id: '1' },
    { item: 'Option 2', id: '2' },
    { item: 'Option 3', id: '3' },
  ];

  return (
    <CSelect
      label="Select Option"
      options={options}
      onChange={(val) => console.log('Selected value:', val)}
    />
  );
};

export default ExampleComponent;
```
