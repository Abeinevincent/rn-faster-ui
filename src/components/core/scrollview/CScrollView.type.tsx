import type { ScrollViewProps, DimensionValue } from 'react-native';
import type { ICView } from '../view/CView.types';
import type { ReactNode } from 'react';

/*
 Omit some props to have them customised e.g have them optional even when they are
  they are required in the mother interface being inherited
*/

export interface ICScrollView
  extends Omit<ICView, 'w' | 'h' | 'bgc'>,
    ScrollViewProps {
  w?: DimensionValue | undefined; // width (optional, default to auto)
  h?: DimensionValue | undefined; // height (optional, default sto auto)
  bgc?: string | 'white'; // backgroundColor(optional, default to white)
  children: ReactNode;
}
