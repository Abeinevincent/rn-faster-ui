[![npm](https://img.shields.io/npm/v/react-native-fast-ui.svg)](https://npmjs.com/package/react-native-fast-ui) [![npm](https://img.shields.io/npm/dm/react-native-fast-ui.svg)](https://npmjs.com/package/react-native-fast-ui)

# React Native Fast UI (react-native-fast-ui)

A versatile React Native UI library designed to accelerate mobile app development by providing a collection of reusable and customizable components. With react-native-fast-ui, you can effortlessly create visually appealing and responsive user interfaces for both Android and iOS platforms faster than ever before.

## Table of Contents

- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Mastering the Library](#mastering-the-library)
- [Backward Compatibility](#backward-compatibility)
- [Contributing](#contributing)
- [License](#license)

## Key Features:

### Flexible Styling:

react-native-fast-ui components supports a wide range of styling props, allowing developers to customize text appearance, alignment, font styles, margins, paddings, and more.

### Platform Compatibility:

Built with cross-platform compatibility in mind, components seamlessly adapt to different mobile platforms, ensuring consistent rendering and behavior on both Android and iOS devices.

## Installation

```sh
npm install react-native-fast-ui
```

## Usage

```js
import { CText } from 'react-native-fast-ui';

// ...

<>
  <CText children="Hello World" c="green" fw="bold" fs={26} />
</>;
```

## Mastering the Library

With react-native-fast-ui, you can write UIs for React Native apps in the shortest time possible.
Components start with `C` prefix e.g a `Text` component is written as `CText`, a `FlatList` as `CFlatList`, `Image` as `CImage`, `View` ad `CView`, etc.
The library focuses on style props that is properties that are passed in the style object in React Native by providing a precise way of writing styles.
Non style props can still be passed normally in `react-native-fast-ui` components forexample `numOfLines` on a `Text` component, `initialNumToRender` on a FlatList among others.

- For properties with one word like `color`, `width`, `height`, etc, you just write the first letter (c="red", w={"100%}, h={200}, etc) and pass it directly as a prop in lower case, not through the style prop, the library does the heavy lifting for you.

```js
import { CText } from 'react-native-fast-ui';

export const App = () => {
  return (
    <>
      <CText c="red" w={"100%"} h={200}>
        {"Some Text"}
      </CText>
       <CText children="Some Text" c="red" w={"100%"} h={200}  /> // you can possibly have it self closing
    </>;
  )
}
```

- If a property name has 2 words but written in camelCase like `fontSize`, `paddingLeft`, `fontWeight`, etc, you write the first letter of the first word followed by the first letter of the second word (fs={17}, pl={20}, fw={'bold'}, etc) and pass it as a prop in lower case.

```js
import { CText } from 'react-native-fast-ui';

export const App = () => {
  return (
    <>
      <CText children="Some Text" fs={17} pl={20} fw={'bold'}  />
    </>;
  )
}
```

- If a property name has 3 or more words but written in camelCase like `textDecorationColor`, `testShadowColor`, etc, you write the first letter of the first word followed by the first letter of the second word followed by first letter of the third word, in that order (tdc={"red"}, tsc={"blue"}, etc) and pass it as a prop in lower case.

```js
import { CText } from 'react-native-fast-ui';

export const App = () => {
  return (
    <>
      <CText children="Some Text" tdc={"red"} tsc={"blue"}  />
    </>;
  )
}
```

- If more than one property name start with same letters, regardles of whether its a 1-word, 2-word or 3-word property, we write one of them normally and add an extra character on the rest, e.g `fontSize` and `fontStyle`, all have 2 words, and all start with `f` and `s`.
  We write one of them as usual and then include another character on the remaining property for example, we write `fontSize` as `fs` and then `fontStyle` as `fst`.

```js
import { CText } from 'react-native-fast-ui';

export const App = () => {
  return (
    <>
      <CText children="Some Text" fs={20} fst="italic"  />
    </>;
  )
}
```

## Backward Compatibility

The library is backward compatible in relation to its mother component provider that is core react native.
If youre not sure the abbreviation of a particular style prop, in addition to checking the documentation for a particular component to find out, you have 2 other options that is writing the style prop normally and passing it to the component with desired style properties inline or through a StyleSheet e.g

```js
import { CView } from 'react-native-fast-ui';

export const App = () => {
  return (
    <>
      <CView
      style={{width: 200, height, 400, backgroundColor: '#678900'}} // inline styles(can also accept them through a StyleSheet)
      >
       {/* Content/children goes here */}
      </CView>
    </>;
  )
}
```

And writing style prop directly as a prop e.g

```js
import { CText } from 'react-native-fast-ui';

export const App = () => {
  return (
    <>
      <CText children="Some Text" fontSize={20} color="gray" fontWeight="bold"  />
    </>;
  )
}
```

In this case, the library does the heavy lifting for you so you donot have to worry whether the library will differentiate a style prop from non-style prop. It definately will do the job very well.

For detailed guide about react-native-fast-ui components and API, refer to the
[Documentation](./src/components/api-reference/api.md)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
