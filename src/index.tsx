import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-fast-ui' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const FastUi = NativeModules.FastUi
  ? NativeModules.FastUi
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return FastUi.multiply(a, b);
}
