import React from 'react';
import { Platform, type TextStyle, TextInput } from 'react-native';
import type { ICTextInput } from './CTextInput.type';
import { textStyleMapper } from '../../../utils/stylemapper';

const CTextInput: React.FC<ICTextInput> = ({
  style: additionalStyles,
  fs,
  c,
  w,
  br,
  ph,
  bw,
  bc,
  placeholder,
  ...rest
}) => {
  // Create style object for default styles
  const textInputStyle: TextStyle = {
    fontSize: fs ? fs : 16,
    color: c ? c : '#222',
    borderColor: bc ? bc : '#999',
    borderWidth: bw ? bw : 0.5,
    width: w ? w : '90%',
    borderRadius: br ? br : 50,
    paddingHorizontal: ph ? ph : 20,
  };

  // Iterate through props and apply corresponding style props dynamically
  Object.keys(rest).forEach((prop) => {
    const key = prop as keyof ICTextInput;
    if (textStyleMapper()[key]) {
      // @ts-ignore
      textInputStyle[textStyleMapper()[key]] = rest[key];
    }
  });

  // Apply platform-specific styles
  if (Platform.OS === 'android') {
    textInputStyle.includeFontPadding = rest.ifp ?? true;
    textInputStyle.verticalAlign = rest.va ?? 'auto';
  } else if (Platform.OS === 'ios') {
    textInputStyle.writingDirection = rest.wd ?? 'auto';
  }

  // Combine custom styles with additional styles
  const combinedStyles = [textInputStyle, additionalStyles];

  // Render CText component with combined styles and children
  return (
    <TextInput
      placeholder={placeholder ? placeholder : 'Default CTextInput component..'}
      placeholderTextColor={rest.placeholderTextColor || '#999'}
      style={combinedStyles}
      {...rest}
      testID="text-input"
    />
  );
};

export { CTextInput };
