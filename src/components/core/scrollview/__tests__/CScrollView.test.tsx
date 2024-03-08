import React from 'react';
import { render } from '@testing-library/react-native';
import { CScrollView } from '../CScrollView';
import { Text } from 'react-native';

describe('CScrollView', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <CScrollView testID="cscrollview">
        <Text testID="text">Hello</Text>
      </CScrollView>
    );
    const scrollView = getByTestId('cscrollview');
    expect(scrollView).toBeTruthy();
  });

  it('renders children correctly', () => {
    // const ChildComponent = () => <CText testID="text">Child Component</CText>;
    const { getByTestId } = render(
      <CScrollView>
        <Text testID="text">Hello</Text>
      </CScrollView>
    );
    const child = getByTestId('text');
    expect(child).toBeTruthy();
  });
});
