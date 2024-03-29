import { SectionList, StyleSheet, type ViewStyle } from 'react-native';
import type { ICSectionList } from './CSectionList.type';
import { viewStyleMapper } from '../../utils/stylemapper';
import type { ICView } from '../view/CView.types';
import React from 'react';

export const CSectionList = <ItemT, SectionT>({
  contentContainerStyle,
  bgc,
  ...rest
}: ICSectionList<ItemT, SectionT>) => {
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
    <SectionList
      testID="CSectionList"
      {...rest}
      contentContainerStyle={combinedStyles}
    />
  );
};
