import { CText } from './components/core/text/CText';
import { CView } from './components/core/view/CView';
import { CScrollView } from './components/core/scrollview/CScrollView';
import { CIcon } from './components/reusable/icon/CIcon';
import { CModal } from './components/core/modal/CModal';
import { CButton } from './components/core/button';
import { CTextInput } from './components/core/input/textinput/CTextInput';
import { CImage } from './components/core/image/CImage';
import { CFlatList } from './components/core/flatlist/CFlatList';
import { CSectionList } from './components/core/sectionlist/CSectionList';
import { CSafeAreaView } from './components/core/safeareaview/CSafeAreaView';

import { colors } from './colors/colors';
import { useDeviceColorThemeDetector } from './hooks/apperance/useDeviceColorThemeDetector';
import { usePortraitLocker } from './hooks/orientation/usePortraitLocker';
import { useAsyncStorageStore } from './hooks/asyncstorage/useAsyncStorageStore';
import { useShowSystemNavbarColorTheme } from './hooks/apperance/useSystemNavbarColorTheme';
import { CPhoneNumberInput } from './components/core/input/numberinput/CPhoneNumberInput';
import { CSelect } from './components/core/select/CSelect';

import { screenWidth, screenHeight } from './components/utils/dimensions';

// Export the CText component and its interface
export { CText };
export type { ICText } from './components/core/text/CText.types';

// Export the CView and its interface
export { CView };
export type { ICView } from './components/core/view/CView.types';

// Export the CScrollView and its interface
export { CScrollView };
export type { ICScrollView } from './components/core/scrollview/CScrollView.type';

// Export CIcon and its interface
export { CIcon };
export { type ICIcon } from './components/reusable/icon/CIcon';

// Export CModal and its interface
export { CModal };
export { type ICModal } from './components/core/modal/CModal.type';

// Export CButton and its interface
export { CButton };
export { type ICButton } from './components/core/button/CButton.type';

// Export CTextInput and its interface
export { CTextInput };
export { type ICTextInput } from './components/core/input/textinput/CTextInput.type';

// Export CImage component and its interface
export { CImage };
export { type ICImage } from './components/core/image/CImage.type';

// Export device/screen dimensions
export { screenWidth, screenHeight };

// Export CFlatList and its interface
export { CFlatList };
export { type ICFlatList } from './components/core/flatlist/CFlatList.type';

// Export CFlatList and its interface
export { CSectionList };
export { type ICSectionList } from './components/core/sectionlist/CSectionList.type';

// Export CSafeAreaView and its interface
export { CSafeAreaView };
export { type ICSafeAreaView } from './components/core/safeareaview/CSafeAreaView.type';

// Export CTextInput and its interface
export { CPhoneNumberInput };
export { type ICPhoneNumberInput } from './components/core/input/numberinput/CPhoneNumberInput.type';

// Export CSelect and its interface
export { CSelect };
export { type ICSelect } from './components/core/select/CSelect.type';

// Export colors and their interface
export { type ICColors } from './colors/colors.type';
export { colors };

// Export custom hooks
export { useAsyncStorageStore };
export { usePortraitLocker };
export { useShowSystemNavbarColorTheme };
export { useDeviceColorThemeDetector };
