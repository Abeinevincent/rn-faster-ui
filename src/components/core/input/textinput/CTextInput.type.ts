import type { TextInputProps } from 'react-native';
import type { ICText } from '../../text/CText.types';

export interface ICTextInput
  extends TextInputProps,
    Omit<
      ICText,
      | 'borderLeftWidth'
      | 'borderTopWidth'
      | 'borderBottomWidth'
      | 'borderRightWidth'
      | 'borderTopLeftRadius'
      | 'borderTopRightRadius'
      | 'borderBottomRightRadius'
      | 'borderBottomLeftRadius'
      | 'children'
    > {}
