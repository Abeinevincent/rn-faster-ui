import React from 'react';
import { FlatList, StyleSheet, type ViewStyle } from 'react-native';
import type { ICFlatList } from './CFlatList.type';
import { viewStyleMapper } from '../../utils/stylemapper';
import type { ICView } from '../view/CView.types';

const CFlatList = <T,>({
  contentContainerStyle,
  bgc,
  ...rest
}: ICFlatList<T>) => {
  // Create default style object
  const flatListStyle: ViewStyle = {
    backgroundColor: bgc ? bgc : 'white',
  };

  // Iterate through props and apply corresponding style props dynamically
  Object.keys(rest).forEach((prop) => {
    const key = prop as keyof ICView;
    if (viewStyleMapper()[key]) {
      // @ts-ignore
      flatListStyle[viewStyleMapper()[key]] = rest[key];
    }
  });

  // Combine custom styles with additional styles
  const combinedStyles = StyleSheet.flatten([
    flatListStyle,
    contentContainerStyle,
  ]);

  // Render FlatList component with combined styles and other props
  return (
    <FlatList
      testID="CFlatList"
      {...rest}
      contentContainerStyle={combinedStyles}
    />
  );
};

export { CFlatList };
