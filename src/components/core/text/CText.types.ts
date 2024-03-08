import {
  type ColorValue,
  type DimensionValue,
  type TextProps,
} from 'react-native';
import { type IReusableStyleTypes } from '../../../types/reusabletypes/ReusableStyleTypes';
import type { ReactNode } from 'react';

// Define interface for CText props extending TextProps
export interface ICText extends TextProps, IReusableStyleTypes {
  // Children
  children: ReactNode;
  // Style-related props
  c?: string; // Text color prop
  bgc?: ColorValue | string; // backgroundColor
  h?: DimensionValue | undefined;
  w?: DimensionValue | undefined;
  ta?: 'auto' | 'left' | 'right' | 'center' | 'justify'; // text align
  tav?: 'auto' | 'top' | 'bottom' | 'center'; //text align vertical
  ff?: string; // Font family prop
  fs?: number; // Font size prop
  fst?: 'normal' | 'italic'; // Font style prop
  fw?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'; // Font weight prop
  ls?: number; // Letter spacing prop
  lh?: number; // Line height prop
  tdl?: 'none' | 'underline' | 'line-through' | 'underline line-through'; // Text decoration line prop
  tds?: 'solid' | 'double' | 'dotted' | 'dashed'; // Text decoration style prop
  tdc?: string; // Text decoration color prop
  tsc?: string; // Text shadow color prop
  tso?: { width: number; height: number }; // Text shadow offset prop
  tsr?: number; // Text shadow radius prop
  tt?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'; // Text transform prop
  // Android-specific props
  ifp?: boolean; // Include font padding prop
  va?: 'auto' | 'top' | 'bottom' | 'middle'; // Vertical align prop
  // iOS-specific props
  wd?: 'auto' | 'ltr' | 'rtl'; // Writing direction prop
  // Universal props
  us?: 'auto' | 'text' | 'none' | 'contain' | 'all'; // User select prop
}
