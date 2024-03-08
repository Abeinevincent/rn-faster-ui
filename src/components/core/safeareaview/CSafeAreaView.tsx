import React from 'react';
import { type ViewStyle, SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import { screenHeight } from '../../utils/dimensions';
import { viewStyleMapper } from '../../utils/stylemapper';
import type { ICSafeAreaView } from './CSafeAreaView.type';

export const CSafeAreaView: React.FC<ICSafeAreaView> = ({
  style: additionalStyles,
  children,
  w,
  h,
  ai,
  jc,
  br,
  pv,
  ...rest
}) => {
  // Create default style object
  const safeAreaViewStyle: ViewStyle = {
    width: w ? w : 'auto',
    height: h ? h : 'auto',
    alignItems: ai ? ai : 'center',
    justifyContent: jc ? jc : 'center',
    borderRadius: br ? br : 10,
    paddingVertical: pv ? pv : screenHeight * 0.07,
  };

  // Iterate through props and apply corresponding style props dynamically
  Object.keys(rest).forEach((prop) => {
    const key = prop as keyof ICSafeAreaView;
    if (viewStyleMapper()[key]) {
      // @ts-ignore
      safeAreaViewStyle[viewStyleMapper()[key]] = rest[key];
    }
  });

  // Combine custom styles with additional styles
  const combinedStyles = StyleSheet.flatten([
    safeAreaViewStyle,
    additionalStyles,
  ]);

  // Render CView component with combined styles and children, if provided
  return (
    <>
      <SafeAreaView testID="safe-area-view" {...rest} style={combinedStyles}>
        {children}
      </SafeAreaView>
    </>
  );
};
