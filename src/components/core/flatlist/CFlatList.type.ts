import type { FlatListProps, ViewStyle } from 'react-native';
import type { ICView } from '../view/CView.types';

export interface ICFlatList<T> extends FlatListProps<T>, ICView {
  // Add your custom style abbreviations here
  contentContainerStyle?: ViewStyle;
}
