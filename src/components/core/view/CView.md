# CView Component Documentation

The `CView` component is a custom view component that extends the functionality of the React Native `View` component.

## Props

### Style-related Props

- `w`: (Required) Width of the view. Accepts a DimensionValue.
- `h`: (Required) Height of the view. Accepts a DimensionValue.
- `bgc`: (Required) Background color of the view. Accepts a string representing a color code.
- `bfv`: (Optional) Backface visibility. Accepts one of: 'visible', 'hidden'.
- `bbc`: (Optional) Border bottom color. Accepts a string representing a color code.
- `bber`: (Optional) Border bottom end radius. Accepts a number.
- `bblr`: (Optional) Border bottom left radius. Accepts a number.
- `bbrr`: (Optional) Border bottom right radius. Accepts a number.
- `bbsr`: (Optional) Border bottom start radius. Accepts a number.
- `bser`: (Optional) Border start end radius. Accepts a number.
- `bssr`: (Optional) Border start start radius. Accepts a number.
- `beer`: (Optional) Border end end radius. Accepts a number.
- `besr`: (Optional) Border end start radius. Accepts a number.
- `bbw`: (Optional) Border bottom width. Accepts a number.
- `bc`: (Optional) Border color. Accepts a string representing a color code.
- `bci`: (Optional) Border curve iOS. Accepts one of: 'circular', 'continuous'.
- `bec`: (Optional) Border end color. Accepts a string representing a color code.
- `blc`: (Optional) Border left color. Accepts a string representing a color code.
- `blw`: (Optional) Border left width. Accepts a number.
- `br`: (Optional) Border radius. Accepts a number.
- `brc`: (Optional) Border right color. Accepts a string representing a color code.
- `brw`: (Optional) Border right width. Accepts a number.
- `bsc`: (Optional) Border start color. Accepts a string representing a color code.
- `bs`: (Optional) Border style. Accepts one of: 'solid', 'dotted', 'dashed'.
- `btc`: (Optional) Border top color. Accepts a string representing a color code.
- `bter`: (Optional) Border top end radius. Accepts a number.
- `btlr`: (Optional) Border top left radius. Accepts a number.
- `btrr`: (Optional) Border top right radius. Accepts a number.
- `btsr`: (Optional) Border top start radius. Accepts a number.
- `btw`: (Optional) Border top width. Accepts a number.
- `bw`: (Optional) Border width. Accepts a number.
- `el`: (Optional) Elevation Android. Sets the elevation of the view. Accepts a number.
- `o`: (Optional) Opacity. Accepts a number.
- `pe`: (Optional) Pointer events. Controls whether the view can be the target of touch events. Accepts one of: 'auto', 'none', 'box-none', 'box-only'.
- `m`: (Optional) Margin. Accepts a DimensionValue.
- `mt`: (Optional) Margin top. Accepts a DimensionValue.
- `mr`: (Optional) Margin right. Accepts a DimensionValue.
- `mb`: (Optional) Margin bottom. Accepts a DimensionValue.
- `ml`: (Optional) Margin left. Accepts a DimensionValue.
- `p`: (Optional) Padding. Accepts a DimensionValue.
- `pt`: (Optional) Padding top. Accepts a DimensionValue.
- `pr`: (Optional) Padding right. Accepts a DimensionValue.
- `pb`: (Optional) Padding bottom. Accepts a DimensionValue.
- `pl`: (Optional) Padding left. Accepts a DimensionValue.
- `ph`: (Optional) Padding horizontal. Accepts a DimensionValue.
- `pv`: (Optional) Padding vertical. Accepts a DimensionValue.
- `mv`: (Optional) Margin vertical. Accepts a DimensionValue.
- `mh`: (Optional) Margin horizontal. Accepts a DimensionValue.
- `ac`: (Optional) Align content. Accepts one of: 'flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around'.
- `ai`: (Optional) Align items. Accepts one of: 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'.
- `as`: (Optional) Align self. Accepts one of: 'auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'.
- `ar`: (Optional) Aspect ratio. Accepts a number or string.
- `b`: (Optional) Bottom. Accepts a DimensionValue.
- `t`: (Optional) Top. Accepts a DimensionValue.
- `r`: (Optional) Right. Accepts a DimensionValue.
- `l`: (Optional) Left. Accepts a DimensionValue.
- `d`: (Optional) Display. Accepts one of: 'none', 'flex'.
- `e`: (Optional) End. Accepts a DimensionValue.
- `f`: (Optional) Flex. Accepts a number.
- `fb`: (Optional) Flex basis. Accepts a DimensionValue.
- `fd`: (Optional) Flex direction. Accepts one of: 'row', 'column'.
- `rg`: (Optional) Row gap. Accepts a number.
- `g`: (Optional) Gap. Accepts a number.
- `cg`: (Optional) Column gap. Accepts a number.
- `fg`: (Optional) Flex grow. Accepts a number.
- `fs`: (Optional) Flex shrink. Accepts a number.
- `fwp`: (Optional) Flex wrap. Accepts one of: 'wrap', 'nowrap', 'wrap-reverse'.
- `jc`: (Optional) Justify content. Accepts one of: 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'.
- `zi`: (Optional) Z index. Accepts a number.

### Additional Props

- `children`: (Optional) Content to be rendered inside the view.

## Example Usage

```jsx
import React from 'react';
import { CView } from './CView';

const MyComponent = () => {
  return (
    <>
      <CView w={100} h={50} bgc="blue" br={10} p={5} el={2} o={0.8} pe="auto">
        {/* Content/children goes here */}
      </CView>
      <CView
        w={100}
        h={50}
        bgc="blue"
        children={<SomeComponentToRenderAsChildren />}
      />
      <CView w={100} h={50} bgc="blue" />
    </>
  );
};

export default MyComponent;
```
