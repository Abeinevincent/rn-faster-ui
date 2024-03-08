import type { TouchableOpacityProps } from 'react-native';
import type { ICView } from '../view/CView.types';

export interface ICButton
  extends Omit<TouchableOpacityProps, 'hitSlop'>,
    ICView {
  isIconButton?: boolean | false;
}
