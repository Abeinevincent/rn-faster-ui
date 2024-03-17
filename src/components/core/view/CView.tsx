import React from 'react';
import { View, Platform, type ViewStyle } from 'react-native';
import type { ICView } from './CView.types';
import { StyleSheet } from 'react-native';
import { viewStyleMapper } from '../../utils/stylemapper';

export const CView: React.FC<ICView> = ({
  style: additionalStyles,
  children,
  bgc,
  ...rest
}) => {
  // Create default style object
  const viewStyle: ViewStyle = {
    backgroundColor: bgc ? bgc : 'transparent',
  };

  // Iterate through props and apply corresponding style props dynamically
  Object.keys(rest).forEach((prop) => {
    const key = prop as keyof ICView;
    if (viewStyleMapper()[key]) {
      // @ts-ignore
      viewStyle[viewStyleMapper()[key]] = rest[key];
    }
  });

  // Apply platform-specific styles
  if (Platform.OS === 'android') {
    viewStyle.elevation = rest.el ?? 0;
  }

  // Combine custom styles with additional styles
  const combinedStyles = StyleSheet.flatten([viewStyle, additionalStyles]);

  // Render CView component with combined styles and children, if provided
  return (
    <>
      <View testID="cview" {...rest} style={combinedStyles}>
        {children}
      </View>
    </>
  );
};
