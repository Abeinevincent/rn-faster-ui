import React from 'react';
import { ScrollView, type ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import type { ICScrollView } from './CScrollView.type';
import { viewStyleMapper } from '../../utils/stylemapper';
import type { ICView } from '../view/CView.types';

export const CScrollView: React.FC<ICScrollView> = ({
  contentContainerStyle: additionalStyles,
  children,
  w,
  h,
  bgc,
  ...rest
}) => {
  // Create style object
  const scrollViewStyle: ViewStyle = {
    width: w,
    height: h,
    backgroundColor: bgc ? bgc : 'white',
  };

  // Iterate through props and apply corresponding style props dynamically
  Object.keys(rest).forEach((prop) => {
    const key = prop as keyof ICView;
    if (viewStyleMapper()[key]) {
      // @ts-ignore
      scrollViewStyle[viewStyleMapper()[key]] = rest[key];
    }
  });

  // Combine custom styles with additional styles
  const combinedStyles = StyleSheet.flatten([
    scrollViewStyle,
    additionalStyles,
  ]);

  // Render CView component with combined styles and children, if provided
  return (
    <ScrollView
      {...rest}
      testID="cscrollview"
      contentContainerStyle={combinedStyles}
    >
      {children}
    </ScrollView>
  );
};
