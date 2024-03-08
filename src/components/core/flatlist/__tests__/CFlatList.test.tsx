import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect'; // Import this to extend Jest's expect functionality
import { CText } from '../../text/CText';
import { CFlatList } from '../CFlatList';

describe('CFlatList component', () => {
  it('renders correctly with provided data', () => {
    const DATA = [
      { id: '1', title: 'First Item' },
      { id: '2', title: 'Second Item' },
      { id: '3', title: 'Third Item' },
    ];

    const renderItem = ({
      item,
    }: {
      item: {
        id: string;
        title: string;
      };
    }) => <CText>{item.title}</CText>;
    const { getByTestId, toJSON } = render(
      <CFlatList
        data={DATA}
        testID="CFlatList"
        renderItem={renderItem}
        keyExtractor={(item: { id: string; title: string }) =>
          item.id.toString()
        }
      />
    );
    const flatList = getByTestId('CFlatList');
    expect(flatList).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders items correctly', () => {
    const DATA = [
      { id: '1', title: 'First Item' },
      { id: '2', title: 'Second Item' },
      { id: '3', title: 'Third Item' },
    ];

    const renderItem = ({
      item,
    }: {
      item: {
        id: string;
        title: string;
      };
    }) => <CText>{item.title}</CText>;
    const { getByText } = render(
      <CFlatList
        data={DATA}
        testID="CFlatList"
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
    expect(getByText('First Item')).toBeTruthy();
    expect(getByText('Second Item')).toBeTruthy();
    expect(getByText('Third Item')).toBeTruthy();
  });

  // Add more test cases for styles, props, etc. as needed
});
