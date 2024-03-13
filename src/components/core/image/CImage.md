# CImage Component

The `CImage` component is a custom image component designed for use in React Native applications. It provides extended functionality and styling options for images.

## Props

### Universal Props

- `w`: (Optional) Width of the image. Accepts a number or a string representing width value.
- `h`: (Optional) Height of the image. Accepts a number or a string representing height value.
- `of`: (Optional) Object Fit of the image. Accepts any of the values: `'cover' | 'contain' | 'fill' | 'scale-down' | undefined`;
- `bgc`: (Optional) Background color of the image. Accepts a string representing a color code.
- `ai`: (Optional) Align items. Accepts one of: 'flex-start', 'flex-end', 'center', 'stretch'. Default: `undefined`.
- `jc`: (Optional) Justify content. Accepts one of: 'flex-start', 'flex-end', 'center', 'space-between', 'space-around'. Default: `undefined`.
- `br`: (Optional) Border radius of the image. Accepts a number. Default: `undefined`.
- `pv`: (Optional) Padding vertical. Accepts a number or a string representing padding vertical value. Default: `undefined`.
- `ph`: (Optional) Padding horizontal. Accepts a number or a string representing padding horizontal value. Default: `undefined`.
- `ViewProps`: (Optional) Accepts props that are accepted by `CView` component

### Image-specific Props

- `rm`: (Optional) Resize mode. Accepts one of: 'cover', 'contain', 'stretch', 'repeat', 'center'. Default: `undefined`.
- `bv`: (Optional) Backface visibility. Accepts one of: 'visible', 'hidden'. Default: `undefined`.
- `ov`: (Optional) Overflow. Accepts one of: 'visible', 'hidden'. Default: `undefined`.
- `oc`: (Optional) Overlay color. Accepts a string representing a color code. Default: `undefined`.
- `tc`: (Optional) Tint color. Accepts a string representing a color code. Default: `undefined`.
- `of`: (Optional) Object fit. Accepts one of: 'cover', 'contain', 'fill', 'scale-down'. Default: `undefined`.

### Universal Props

- `source`: (Required) The image source. Accepts a path or a resource reference.

## Example Usage

```jsx
import { CImage } from './CImage';

// Example usage of CImage component
<CImage
  w={200}
  h={150}
  bgc="lightgray"
  ai="center"
  jc="center"
  br={10}
  pv={5}
  ph={10}
  rm="cover"
  bv="hidden"
  ov="visible"
  oc="rgba(255, 0, 0, 0.5)"
  tc="#00f"
  of="contain"
  source={require('./path/to/image.jpg')}
/>;
```
