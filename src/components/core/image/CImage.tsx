import React from 'react';
import { Image, type ImageStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import { screenHeight, screenWidth } from '../../utils/dimensions';
import { imageStyleProps } from '../../utils/stylemapper';
import type { ICImage } from './CImage.type';

export const CImage: React.FC<ICImage> = ({
  style: additionalStyles,
  w,
  h,
  ...rest
}) => {
  // Create default style object
  const imageStyle: ImageStyle = {
    width: w ? w : screenWidth * 0.9,
    height: h ? h : screenHeight * 0.5,
  };

  // Iterate through props and apply corresponding style props dynamically
  Object.keys(rest).forEach((prop) => {
    const key = prop as keyof ICImage;
    if (imageStyleProps()[key]) {
      // @ts-ignore
      imageStyle[imageStyleProps()[key]] = rest[key];
    }
  });

  // Combine custom styles with additional styles
  const combinedStyles = StyleSheet.flatten([imageStyle, additionalStyles]);

  // Render CView component with combined styles and children, if provided
  return (
    <>
      <Image testID="image" {...rest} style={combinedStyles} />
    </>
  );
};
