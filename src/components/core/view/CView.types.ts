import {
  type ViewProps,
  type DimensionValue,
  type ColorValue,
} from 'react-native';
import type { IReusableStyleTypes } from '../../../types/reusabletypes/ReusableStyleTypes';
import type { ReactNode } from 'react';

export interface ICView extends ViewProps, IReusableStyleTypes {
  children?: ReactNode;
  bfv?: 'visible' | 'hidden'; // backfaceVisibility
  w?: DimensionValue; // width(required)
  h?: DimensionValue; // height(required)
  sc?: string; //shadowColor
  sot?: {
    width: number;
    height: number;
  }; //'shadowOffset',
  so?: number; // 'shadowOpacity',
  sr?: string | number; //'shadowRadius',
  bgc?: ColorValue | string; // backgroundColor (required)
  bc?: string; // borderColor
  bci?: 'circular' | 'continuous'; // borderCurve iOS
  pe?: 'auto' | 'none' | 'box-none' | 'box-only'; // pointerEvents
}
