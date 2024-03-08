# CScrollView Component

This component provides a customizable `ScrollView` wrapper for React Native applications. It extends all the props of `ScrollView` and `CView` from the library.

## Props

### Required Props

- `children`: ReactNode - The content to be displayed within the ScrollView.

### Optional Props

- `w`: DimensionValue | 'auto' - Width of the ScrollView. Default is `'auto'`.
- `h`: DimensionValue | 'auto' - Height of the ScrollView. Default is `'auto'`.
- `bgc`: string - Background color of the ScrollView. Default is `'white'`.
- [CView Props](../view/CView.md)

## Usage

```jsx
import React from 'react';
import { CScrollView } from './CScrollView';

const MyComponent = () => {
  return (
    <CScrollView bgc="white" w={200} h={300}>
      {/* Your content/children here */}
    </CScrollView>
  );
};
```
