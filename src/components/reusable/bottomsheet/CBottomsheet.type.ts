import type { BottomSheetProps } from '@gorhom/bottom-sheet';
import type { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

export interface ICBottomSheet extends BottomSheetProps {
  ref?: React.MutableRefObject<BottomSheetMethods | undefined>;
}
