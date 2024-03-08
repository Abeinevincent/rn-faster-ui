import React from 'react';
import { Platform, type ViewStyle, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import type { ICButton } from './CButton.type';
import { CText } from '../text/CText';
import { CIcon } from '../../reusable/icon/CIcon';
import { screenHeight, screenWidth } from '../../utils/dimensions';
import { viewStyleMapper } from '../../utils/stylemapper';

export const CButton: React.FC<ICButton> = ({
  style: additionalStyles,
  children,
  isIconButton,
  w,
  h,
  bgc,
  ai,
  jc,
  br,
  ...rest
}) => {
  // Create style object
  const defaultStyles: ViewStyle = {
    width: w ? w : '90%',
    height: h ? h : screenHeight * 0.06,
    backgroundColor: bgc ? bgc : 'teal',
    alignItems: ai ? ai : 'center',
    justifyContent: jc ? jc : 'center',
    borderRadius: br ? br : 50,
  };

  // create default icon button styles
  const defaultIconButtonStyles: ViewStyle = {
    width: w ? w : screenWidth * 0.15,
    height: h ? h : screenWidth * 0.15,
    backgroundColor: bgc ? bgc : 'teal',
    alignItems: ai ? ai : 'center',
    justifyContent: jc ? jc : 'center',
    borderRadius: br ? br : 100,
  };

  // Iterate through props and apply corresponding style props dynamically
  Object.keys(rest).forEach((prop) => {
    const key = prop as keyof ICButton;
    if (viewStyleMapper()[key]) {
      // @ts-ignore
      defaultStyles[viewStyleMapper()[key]] = rest[key];
    }
  });

  // Apply platform-specific styles
  if (Platform.OS === 'android') {
    defaultStyles.elevation = rest.el ?? 0;
  }

  const combinedStyles = StyleSheet.flatten([defaultStyles, additionalStyles]);

  const combinedIconButtonStyles = StyleSheet.flatten([
    defaultIconButtonStyles,
    additionalStyles,
  ]);

  // Render CButton component with combined styles and children, if provided
  return (
    <>
      {children ? (
        <TouchableOpacity {...rest} testID="CButton" style={combinedStyles}>
          {children}
        </TouchableOpacity>
      ) : !children && isIconButton ? (
        <TouchableOpacity
          {...rest}
          testID="CButton"
          style={combinedIconButtonStyles}
        >
          <CIcon name="arrowright" color="white" family="AntDesign" />
        </TouchableOpacity>
      ) : !children && !isIconButton ? (
        <TouchableOpacity {...rest} testID="CButton" style={combinedStyles}>
          <CText {...rest} w="90%" ta="center" c="white" fs={17}>
            Default Button
          </CText>
        </TouchableOpacity>
      ) : null}
    </>
  );
};
