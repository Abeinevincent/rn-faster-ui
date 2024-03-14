# CPhoneNumberInput Component

The `CPhoneNumberInput` component is a wrapper around the `PhoneInput` component from `react-native-phone-number-input`. It provides a customizable input field for phone numbers with additional features like support for country codes.

## Props

### `defaultCode` (string)

- The default country code to be displayed in the input field.

### `withDarkTheme` (boolean)

- Determines whether to use a dark theme for the input field.
- Default: `false`.

### `withShadow` (boolean)

- Determines whether to display a shadow around the input field.
- Default: `false`

### `autoFocus` (boolean)

- Determines whether the input field should automatically receive focus when rendered.
- Default: `false`

### `defaultValue` (string)

- The default value to be displayed in the input field.

### `value` (string)

- The value of the input field.

### `disabled` (boolean)

- Determines whether the input field is disabled.
- Default: `false`

### `disableArrowIcon` (boolean)

- Determines whether to disable the arrow icon for dropdown.
- Default: `false`

### `placeholder` (string)

- The placeholder text for the input field.

### `onChangeCountry` (function)

- Callback function invoked when the selected country changes.
- Signature: `(country: Country) => void`

### `onChangeText` (function)

- Callback function invoked when the text input value changes.
- Signature: `(text: string) => void`

### `onChangeFormattedText` (function)

- Callback function invoked when the formatted text input value changes.
- Signature: `(text: string) => void`

### `containerStyle` (StyleProp<ViewStyle>)

- Custom style for the container of the input field.

### `textContainerStyle` (StyleProp<ViewStyle>)

- Custom style for the text container of the input field.

### `renderDropdownImage` (JSX.Element)

- Custom element to render the dropdown image.

### `textInputProps` (TextInputProps)

- Additional props to be passed to the underlying TextInput component.

### `textInputStyle` (StyleProp<TextStyle>)

- Custom style for the text input.

### `codeTextStyle` (StyleProp<TextStyle>)

- Custom style for the country code text.

### `flagButtonStyle` (StyleProp<ViewStyle>)

- Custom style for the flag button.

### `countryPickerButtonStyle` (StyleProp<ViewStyle>)

- Custom style for the country picker button.

### `layout` ('first' | 'second')

- Layout style for the input field.
- Default: `'first'`

### `filterProps` (CountryFilterProps)

- Additional props to be passed to the country filter.

### `countryPickerProps` (any)

- Additional props to be passed to the country picker.

## Usage

```jsx
import React from 'react';
import { CPhoneNumberInput } from './path/to/CPhoneNumberInput';

const ExampleComponent = () => {
  return (
    <CPhoneNumberInput
      defaultCode="US"
      placeholder="Enter phone number"
      onChangeText={(text) => console.log('Phone number changed:', text)}
    />
  );
};

export default ExampleComponent;
```
