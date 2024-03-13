import React from 'react';
import { render } from '@testing-library/react-native';
import { CImage } from '../CImage';
import '@testing-library/jest-native/extend-expect'; // Import this to extend Jest's expect functionality

describe('CImage Component', () => {
  test('renders correctly with default props', () => {
    const { getByTestId } = render(<CImage w={100} h={200} />);
    const image = getByTestId('image');

    // Add assertions for default styles and props
    expect(image).toHaveStyle({
      objectFit: 'cover',
    });
  });

  // test('renders with custom styles and props', () => {
  //   const { getByTestId } = render(<CImage testID="image" w={200} h={100} />);
  //   const image = getByTestId('image');

  //   // Add assertions for custom styles and props
  //   expect(image).toHaveStyle({
  //     width: 200,
  //     height: 100,
  //   });
  // });
});
