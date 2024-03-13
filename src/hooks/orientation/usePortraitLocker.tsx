import { useEffect } from 'react';
import Orientation from 'react-native-orientation-locker';

export const usePortraitLocker = () => {
  useEffect(() => {
    // Lock the screen to portrait mode
    Orientation.lockToPortrait();

    // Optional: Listen for orientation changes and lock to portrait again
    const orientationChangeHandler = () => {
      Orientation.lockToPortrait();
    };

    // Subscribe to the orientation change event
    Orientation.addOrientationListener(orientationChangeHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      Orientation.removeOrientationListener(orientationChangeHandler);
    };
  }, []); // Empty dependency array to run the effect only once
};
