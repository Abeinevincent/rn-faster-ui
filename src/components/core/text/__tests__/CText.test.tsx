import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect'; // Import this to extend Jest's expect functionality
import { CText } from '../CText';

describe('CText Component', () => {
  test('renders correctly with default props', () => {
    const { getByTestId, toJSON } = render(
      <CText testID="text">Default Text</CText>
    );
    const text = getByTestId('text');

    // Add assertions for default styles and props
    expect(text).toHaveStyle({
      fontSize: 16,
      color: 'black',
    });

    expect(toJSON()).toMatchSnapshot();
  });

  test('renders with custom styles and props', () => {
    const { getByTestId } = render(
      <CText testID="text" fs={20} c="red" ifp={false} va="top" wd="ltr">
        Custom Text
      </CText>
    );
    const text = getByTestId('text');

    // Add assertions for custom styles and props
    expect(text).toHaveStyle({
      fontSize: 20,
      color: 'red',
      includeFontPadding: false,
      verticalAlign: 'top',
      writingDirection: 'ltr',
      // other expected styles
    });
  });

  // other tests
});
