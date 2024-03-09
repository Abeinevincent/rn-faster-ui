import React from 'react';
import { View, Platform, type ViewStyle } from 'react-native';
import type { ICView } from './CView.types';
import { StyleSheet } from 'react-native';
import { viewStyleMapper } from '../../utils/stylemapper';
import { CText } from '../text/CText';

export const CView: React.FC<ICView> = ({
  style: additionalStyles,
  children,
  ai,
  ...rest
}) => {
  // Create default style object
  const viewStyle: ViewStyle = {
    // width: w ? w : 'auto',
    // height: h ? h : 'auto',
    // backgroundColor: bgc ? bgc : 'teal',
    alignItems: ai ? ai : 'center',
    // justifyContent: jc ? jc : 'center',
    // borderRadius: br ? br : 10,
    // paddingVertical: pv ? pv : screenHeight * 0.07,
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
        {children ? (
          children
        ) : (
          <>
            <CText children={'Default CView Component'} c="white" />
            <CText
              numberOfLines={1}
              ph={10}
              children={'Only pass props you would like to change'}
              c="white"
            />
          </>
        )}
      </View>
    </>
  );
};
