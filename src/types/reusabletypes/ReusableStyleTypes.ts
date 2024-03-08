import {
  type ColorValue,
  type DimensionValue,
  type FlexAlignType,
  type FlexStyle,
} from 'react-native';

export interface IReusableStyleTypes extends FlexStyle {
  w?: DimensionValue | undefined; // Width prop
  h?: DimensionValue | undefined; // Height prop
  bgc?: ColorValue | string;
  // Margin and Padding props
  m?: DimensionValue | undefined; // Margin prop
  mv?: DimensionValue | undefined; // Margin vertical prop
  mh?: DimensionValue | undefined; // Margin horizontal prop
  mt?: DimensionValue | undefined; // Margin top prop
  mr?: DimensionValue | undefined; // Margin right prop
  mb?: DimensionValue | undefined; // Margin bottom prop
  ml?: DimensionValue | undefined; // Margin left prop
  p?: DimensionValue | undefined; // Padding prop
  pt?: DimensionValue | undefined; // Padding top prop
  pr?: DimensionValue | undefined; // Padding right prop
  pb?: DimensionValue | undefined; // Padding bottom prop
  pl?: DimensionValue | undefined; // Padding left prop
  ph?: DimensionValue | undefined; // Padding horizontal prop
  pv?: DimensionValue | undefined; // Padding vertical prop
  ov?: 'visible' | 'hidden' | undefined; //overflow
  pn?: 'absolute' | 'relative' | undefined; //position
  // other layout props
  ac?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | undefined; // alignContent
  ai?: FlexAlignType | undefined; //alignItems
  as?: 'auto' | FlexAlignType | undefined; //alignSelf
  ar?: number | string | undefined; // aspectRatio
  bbc?: string; // borderBottomColor
  bber?: number; // borderBottomEndRadius
  bblr?: number; // borderBottomLeftRadius
  bbrr?: number; // borderBottomRightRadius
  bbsr?: number; // borderBottomStartRadius
  bser?: number; // borderStartEndRadius
  bssr?: number; // borderStartStartRadius
  beer?: number; // borderEndEndRadius
  besr?: number; // borderEndStartRadius
  bbw?: number; // borderBottomWidth
  bec?: string; // borderEndColor
  blc?: string; // borderLeftColor
  blw?: number; // borderLeftWidth
  br?: number; // borderRadius
  brc?: ColorValue | string; // borderRightColor
  brw?: number; // borderRightWidth
  bsc?: string; // borderStartColor
  bs?: 'solid' | 'dotted' | 'dashed'; // borderStyle
  btc?: string; // borderTopColor
  bter?: number; // borderTopEndRadius
  btlr?: number; // borderTopLeftRadius
  btrr?: number; // borderTopRightRadius
  btsr?: number; // borderTopStartRadius
  btw?: number; // borderTopWidth
  bw?: number; // borderWidth
  bc?: string; //borderColor
  el?: number; // elevation Android
  o?: number; // opacity
  b?: DimensionValue | undefined; //bottom
  t?: DimensionValue | undefined; //top
  r?: DimensionValue | undefined; //right
  l?: DimensionValue | undefined; //left
  d?: 'none' | 'flex' | undefined; //display
  e?: DimensionValue | undefined; //end
  s?: DimensionValue | undefined; //start
  f?: number | undefined; //flex
  fb?: DimensionValue | undefined; //flexBasis
  fd?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined; //flexDirection
  rg?: number | undefined; // rowGap
  g?: number | undefined; //gap
  cg?: number | undefined; //columnGap
  fg?: number | undefined; ///flexGrow
  fs?: number | undefined; //flexShrink
  zi?: number | undefined; //zIndex
  fwp?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined; //flexWrap
  jc?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined; //justifyContent
}
