# CTextInput Component

The `CTextInput` component is a custom text input component that extends the functionality of the React Native `TextInput` component.

## Props

### Style-related Props

- `fs`: (Optional) Font size. Accepts a number representing font size. Default: 16.
- `c`: (Optional) Text color. Accepts a string representing a color code. Default: '#222'.
- `w`: (Optional) Width of the text input. Accepts a string or a number. Default: '90%'.
- `h`: (Optional) Height of the text input. Accepts a string or a number.
- `br`: (Optional) Border radius. Accepts a number. Default: 50.
- `ph`: (Optional) Padding horizontal. Accepts a number. Default: 20.
- `bw`: (Optional) Border width. Accepts a number. Default: 0.5.
- `bc`: (Optional) Border color. Accepts a string representing a color code. Default: '#999'.
- `placeholder`: (Optional) Placeholder text for the input.

### Text Styling Props

- `ta`: (Optional) Text align. Accepts one of: 'auto', 'left', 'right', 'center', 'justify'.
- `tav`: (Optional) Vertical text align. Accepts one of: 'auto', 'top', 'bottom', 'center'.
- `ff`: (Optional) Font family. Accepts a string representing the font family.
- `fst`: (Optional) Font style. Accepts one of: 'normal', 'italic'.
- `fw`: (Optional) Font weight. Accepts one of: 'normal', 'bold', or a numeric value from '100' to '900'.
- `ls`: (Optional) Letter spacing. Accepts a number representing letter spacing.
- `lh`: (Optional) Line height. Accepts a number representing line height.
- `tdl`: (Optional) Text decoration line. Accepts one of: 'none', 'underline', 'line-through', 'underline line-through'.
- `tds`: (Optional) Text decoration style. Accepts one of: 'solid', 'double', 'dotted', 'dashed'.
- `tdc`: (Optional) Text decoration color. Accepts a string representing a color code.
- `tsc`: (Optional) Text shadow color. Accepts a string representing a color code.
- `tso`: (Optional) Text shadow offset. Accepts an object with `width` and `height` properties.
- `tsr`: (Optional) Text shadow radius. Accepts a number representing the text shadow radius.
- `tt`: (Optional) Text transform. Accepts one of: 'none', 'uppercase', 'lowercase', 'capitalize'.

### Margin and Padding Props

- `m`: (Optional) Margin. Accepts a number or a string representing margin value.
- `mt`: (Optional) Margin top. Accepts a number or a string representing margin top value.
- `mr`: (Optional) Margin right. Accepts a number or a string representing margin right value.
- `mb`: (Optional) Margin bottom. Accepts a number or a string representing margin bottom value.
- `ml`: (Optional) Margin left. Accepts a number or a string representing margin left value.
- `p`: (Optional) Padding. Accepts a number or a string representing padding value.
- `pt`: (Optional) Padding top. Accepts a number or a string representing padding top value.
- `pr`: (Optional) Padding right. Accepts a number or a string representing padding right value.
- `pb`: (Optional) Padding bottom. Accepts a number or a string representing padding bottom value.
- `pl`: (Optional) Padding left. Accepts a number or a string representing padding left value.

### Border-related Props

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

### Platform-specific Props

- `ifp`: (Optional) Include font padding (Android). Accepts a boolean. Default: true.
- `va`: (Optional) Vertical align (Android). Accepts one of: 'auto', 'top', 'bottom', 'middle'. Default: 'auto'.
- `wd`: (Optional) Writing direction (iOS). Accepts one of: 'auto', 'ltr', 'rtl'. Default: 'auto'.

### Universal Props

- `us`: (Optional) User select. Accepts one of: 'auto', 'text', 'none', 'contain', 'all'. Default: 'none'.

## Example Usage

```jsx
import { CTextInput } from './CTextInput';

// Example usage of CTextInput component
<CTextInput
  fs={18}
  c="blue"
  w={200}
  h={40}
  br={10}
  ph={15}
  bw={1}
  bc="#555"
  placeholder="Enter text here"
/>;
```
