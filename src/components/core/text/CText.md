# CText Component

The `CText` component is a custom text component that extends the functionality of the React Native `Text` component.

## Props

### Children Props

- `children`: (Required) Content to render on the ui.

### Style-related Props

- `w`: (Optional) Width of the text. Accepts a string or a number. Default: '100%'.
- `h`: (Optional) Height of the text. Accepts a string or a number. Default: 'auto'.
- `c`: (Optional) Text color. Accepts a string representing a color code. Default: 'black'.
- `ta`: (Optional) Text alignment. Accepts one of: 'auto', 'left', 'right', 'center', 'justify'. Default: 'auto'.
- `tav`: (Optional) Vertical text alignment. Accepts one of: 'auto', 'top', 'bottom', 'center'. Default: 'auto'.
- `ff`: (Optional) Font family. Accepts a string representing the font family. Default: 'System'.
- `fs`: (Optional) Font size. Accepts a number representing font size. Default: 14.
- `fst`: (Optional) Font style. Accepts one of: 'normal', 'italic'. Default: 'normal'.
- `fw`: (Optional) Font weight. Accepts one of: 'normal', 'bold', or a numeric value from '100' to '900'. Default: 'normal'.
- `ls`: (Optional) Letter spacing. Accepts a number representing letter spacing. Default: 0.
- `lh`: (Optional) Line height. Accepts a number representing line height. Default: 20.
- `tdl`: (Optional) Text decoration line. Accepts one of: 'none', 'underline', 'line-through', 'underline line-through'. Default: 'none'.
- `tds`: (Optional) Text decoration style. Accepts one of: 'solid', 'double', 'dotted', 'dashed'. Default: 'solid'.
- `tdc`: (Optional) Text decoration color. Accepts a string representing a color code. Default: 'black'.
- `tsc`: (Optional) Text shadow color. Accepts a string representing a color code. Default: 'transparent'.
- `tso`: (Optional) Text shadow offset. Accepts an object with `width` and `height` properties. Default: `{ width: 0, height: 0 }`.
- `tsr`: (Optional) Text shadow radius. Accepts a number representing the text shadow radius. Default: 0.
- `tt`: (Optional) Text transform. Accepts one of: 'none', 'uppercase', 'lowercase', 'capitalize'. Default: 'none'.
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

### Margin and Padding Props

- `m`: (Optional) Margin. Accepts a number or a string representing margin value. Default: 0.
- `mt`: (Optional) Margin top. Accepts a number or a string representing margin top value. Default: 0.
- `mr`: (Optional) Margin right. Accepts a number or a string representing margin right value. Default: 0.
- `mb`: (Optional) Margin bottom. Accepts a number or a string representing margin bottom value. Default: 0.
- `ml`: (Optional) Margin left. Accepts a number or a string representing margin left value. Default: 0.
- `p`: (Optional) Padding. Accepts a number or a string representing padding value. Default: 0.
- `pt`: (Optional) Padding top. Accepts a number or a string representing padding top value. Default: 0.
- `pr`: (Optional) Padding right. Accepts a number or a string representing padding right value. Default: 0.
- `pb`: (Optional) Padding bottom. Accepts a number or a string representing padding bottom value. Default: 0.
- `pl`: (Optional) Padding left. Accepts a number or a string representing padding left value. Default: 0.

### Platform-specific Props

- `ifp`: (Optional) Include font padding (Android). Accepts a boolean. Default: true.
- `va`: (Optional) Vertical align (Android). Accepts one of: 'auto', 'top', 'bottom', 'middle'. Default: 'auto'.
- `wd`: (Optional) Writing direction (iOS). Accepts one of: 'auto', 'ltr', 'rtl'. Default: 'auto'.

### Universal Props

- `us`: (Optional) User select. Accepts one of: 'auto', 'text', 'none', 'contain', 'all'. Default: 'none'.

## Example Usage

```jsx
import { CText } from './CText';

// Example usage of CText component
<CText
  w={100}
  h={50}
  c="red"
  fontSize={20}
  fontWeight="bold"
  margin={10}
  padding={5}
>
  Custom Text
</CText>;
```
