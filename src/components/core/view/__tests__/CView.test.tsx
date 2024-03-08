import React from 'react';
import '@testing-library/jest-native/extend-expect'; // Import this to extend Jest's expect functionality
import { render } from '@testing-library/react-native';
import { CText } from '../../text/CText';
import { CView } from '../CView';

describe('CView Component', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <CView bgc="green" w={200} h={300} testID="cview" />
    );
    const cview = getByTestId('cview');
    expect(cview).toBeDefined();
  });

  test('renders children correctly', () => {
    const ChildComponent = () => <CText c={'black'}>Child Component</CText>;
    const { getByText, toJSON } = render(
      <CView bgc="green" w={200} h={300}>
        <ChildComponent />
      </CView>
    );
    const childComponent = getByText('Child Component');
    expect(childComponent).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });

  test('applies provided styles', () => {
    const { getByTestId } = render(
      <CView
        testID="cview"
        w={100}
        h={100}
        bgc="red"
        bfv="visible"
        bbc="blue"
        bber={5}
      />
    );
    const cview = getByTestId('cview');
    expect(cview).toHaveStyle({
      width: 100,
      height: 100,
      backgroundColor: 'red',
      backfaceVisibility: 'visible',
      borderBottomColor: 'blue',
      borderBottomEndRadius: 5,
    });
  });

  // Add more test cases as needed
});
