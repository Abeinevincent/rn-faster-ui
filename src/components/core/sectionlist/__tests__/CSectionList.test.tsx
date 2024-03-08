import React from 'react';
import '@testing-library/jest-native/extend-expect'; // Import this to extend Jest's expect functionality
import { render } from '@testing-library/react-native';
import { CSectionList } from '../CSectionList';
import { CView } from '../../view/CView';
import { CText } from '../../text/CText';

describe('CSectionList component', () => {
  it('renders correctly with provided data', () => {
    const DATA = [
      {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
      },
      {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
      },
      {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
      },
      {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
      },
    ];

    const renderItem = ({ item }: { item: string }) => (
      <CView bgc={'#f9c2ff'} ph={50} mv={8}>
        <CText fs={24}>{item}</CText>
      </CView>
    );

    const renderSectionHeader = ({
      section: { title },
    }: {
      section: { title: string };
    }) => (
      <CText c="black" fs={25} bgc={'white'}>
        {title}
      </CText>
    );

    const { getByTestId, toJSON } = render(
      <CSectionList
        testID="CSectionList"
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    );
    const sectionList = getByTestId('CSectionList');
    expect(sectionList).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders section headers and items correctly', () => {
    const DATA = [
      {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
      },
      {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
      },
      {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
      },
      {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
      },
    ];

    const renderItem = ({ item }: { item: string }) => (
      <CView bgc={'#f9c2ff'} ph={50} mv={8}>
        <CText fs={24}>{item}</CText>
      </CView>
    );

    const renderSectionHeader = ({
      section: { title },
    }: {
      section: { title: string };
    }) => (
      <CText c="black" fs={25} bgc={'white'}>
        {title}
      </CText>
    );

    const { getByText } = render(
      <CSectionList
        testID="CSectionList"
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    );

    // Check if section headers and items are rendered correctly
    expect(getByText('Main dishes')).toBeTruthy();
    expect(getByText('Pizza')).toBeTruthy();
    expect(getByText('Sides')).toBeTruthy();
    expect(getByText('French Fries')).toBeTruthy();
    // Add more assertions for other sections and items
  });
});
