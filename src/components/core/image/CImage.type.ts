import type {
  ColorValue,
  DimensionValue,
  ImageProps,
  ImageResizeMode,
} from 'react-native';
import type { ICView } from '../view/CView.types';

export interface ICImage
  extends ImageProps,
    Omit<ICView, 'height' | 'style' | 'width' | 'borderRadius' | 'children'> {
  w: DimensionValue | undefined;
  h: DimensionValue | undefined;
  rm?: ImageResizeMode | undefined; //resizeMode
  bv?: 'visible' | 'hidden' | undefined; //backfaceVisibility
  ov?: 'visible' | 'hidden' | undefined; //overflow
  oc?: ColorValue | undefined; //overlayColor
  tc?: ColorValue | undefined; //tintColor
  of?: 'cover' | 'contain' | 'fill' | 'scale-down' | undefined; //objectFit
}
