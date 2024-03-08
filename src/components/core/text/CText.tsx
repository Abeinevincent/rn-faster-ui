import React from 'react';
import { Text, Platform, type TextStyle } from 'react-native';
import { type ICText } from './CText.types';
import { textStyleMapper } from '../../utils/stylemapper';

const CText: React.FC<ICText> = ({
  style: additionalStyles,
  children,
  fs,
  c,
  ...rest
}) => {
  // Create style object for default styles
  const textStyle: TextStyle = {
    fontSize: fs ? fs : 16,
    color: c ? c : 'black',
  };

  // Iterate through props and apply corresponding style props dynamically
  Object.keys(rest).forEach((prop) => {
    const key = prop as keyof ICText;
    if (textStyleMapper()[key]) {
      // @ts-ignore
      textStyle[textStyleMapper()[key]] = rest[key];
    }
  });

  // Apply platform-specific styles
  if (Platform.OS === 'android') {
    textStyle.includeFontPadding = rest.ifp ?? true;
    textStyle.verticalAlign = rest.va ?? 'auto';
  } else if (Platform.OS === 'ios') {
    textStyle.writingDirection = rest.wd ?? 'auto';
  }

  // Combine custom styles with additional styles
  const combinedStyles = [textStyle, additionalStyles];

  // Render CText component with combined styles and children
  return (
    <Text style={combinedStyles} {...rest} testID="text">
      {children}
    </Text>
  );
};

export { CText };
