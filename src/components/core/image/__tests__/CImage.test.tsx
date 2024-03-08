import React from 'react';
import { render } from '@testing-library/react-native';
import { CImage } from '../CImage';
import '@testing-library/jest-native/extend-expect'; // Import this to extend Jest's expect functionality
import { screenHeight, screenWidth } from '../../../utils/dimensions';

describe('CImage Component', () => {
  test('renders correctly with default props', () => {
    const { getByTestId } = render(<CImage testID="image" />);
    const image = getByTestId('image');

    // Add assertions for default styles and props
    expect(image).toHaveStyle({
      width: screenWidth * 0.9,
      height: screenHeight * 0.5,
    });
    // Add more assertions for other default styles and props
  });

  test('renders with custom styles and props', () => {
    const { getByTestId } = render(
      <CImage
        testID="image"
        w={200}
        h={100}
        // Add other custom props
      />
    );
    const image = getByTestId('image');

    // Add assertions for custom styles and props
    expect(image).toHaveStyle({
      width: 200,
      height: 100,
    });
  });
});
