
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNFastUiSpec.h"

@interface FastUi : NSObject <NativeFastUiSpec>
#else
#import <React/RCTBridgeModule.h>

@interface FastUi : NSObject <RCTBridgeModule>
#endif

@end
