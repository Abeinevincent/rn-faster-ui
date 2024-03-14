import type { StyleProp, ViewStyle } from 'react-native';

export interface ICSelect {
  label: string;
  onChange?: (val: any) => void;
  onMultiSelect?: any;
  inputPlaceholder?: string;
  listEmptyText?: string;
  width?: string;
  viewMargin?: string;
  onTapClose?: any;
  isMulti?: boolean;
  hideInputFilter?: boolean;
  selectedValues?: any[];
  value?: any;
  selectIcon?: any;
  labelStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  inputFilterContainerStyle?: StyleProp<ViewStyle>;
  inputFilterStyle?: StyleProp<ViewStyle>;
  multiOptionContainerStyle?: StyleProp<ViewStyle>;
  multiOptionsLabelStyle?: StyleProp<ViewStyle>;
  listEmptyLabelStyle?: StyleProp<ViewStyle>;
  multiListEmptyLabelStyle?: StyleProp<ViewStyle>;
  selectedItemStyle?: StyleProp<ViewStyle>;
  searchInputProps?: {};
  multiSelectInputFieldProps?: {};
  listOptionProps?: {};
  arrowIconColor?: string;
  searchIconColor?: string;
  toggleIconColor?: string;
  options: { item: string; id: string }[];
}
