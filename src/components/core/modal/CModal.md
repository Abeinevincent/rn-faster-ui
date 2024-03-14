# CModal Component

The `CModal` component is a customizable modal component for React Native applications. It provides a flexible modal interface with various configuration options.

## Props

### `modalVisible` (boolean)

- Determines whether the modal is visible or not.
- Default: `false`

### `setModalVisible` (function)

- Function to toggle the visibility of the modal.
- Signature: `(visible: boolean) => void`

### Extended Props from `ModalProps` of React Native

The `CModal` component extends the `ModalProps` from React Native, inheriting its properties. Most notably:

- **`animationType`** (`'none' | 'slide' | 'fade'`)

  - Determines how the modal will animate into and out of view.
  - Default: `'none'`

- **`transparent`** (`boolean`)

  - Determines whether the modal is transparent.
  - Default: `false`

- **`visible`** (`boolean`)

  - Determines whether the modal is visible or not.
  - Default: `false`

- **`onRequestClose`** (`() => void`)

  - Function called when the modal is requested to be closed (e.g., when the user taps the hardware back button on Android).
  - Default: `undefined`

- **`children`** (`React.ReactNode`)
  - The content to render inside the modal. If not provided, a default modal content will be rendered.
  - Default: `undefined`, but if not provided, a default modal layout with a close button, a "Hello World!" message, and a button to hide the modal will be rendered.

## Usage

```jsx
import React from 'react';
import { Button, View, Text } from 'react-native';
import { CModal } from './path/to/CModal';

const ExampleComponent = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <CModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <View style={{ padding: 20 }}>
          <Text>This is a modal content.</Text>
          <Button title="Close Modal" onPress={() => setModalVisible(false)} />
        </View>
      </CModal>
    </>
  );
};

export default ExampleComponent;
```
