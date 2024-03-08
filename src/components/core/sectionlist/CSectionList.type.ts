import type { SectionListProps } from 'react-native';
import type { ICView } from '../view/CView.types';

export interface ICSectionList<ItemT, SectionT>
  extends SectionListProps<ItemT, SectionT>,
    ICView {}
