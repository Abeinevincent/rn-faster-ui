import React from 'react';
import '@testing-library/jest-native/extend-expect'; // Import this to extend Jest's expect functionality
import { render } from '@testing-library/react-native';
import { CTextInput } from '../CTextInput';

describe('CTextInput Component', () => {
  test('renders correctly with default props', () => {
    const { getByTestId, toJSON } = render(<CTextInput testID="text-input" />);
    const textInput = getByTestId('text-input');
    // Add assertions for default styles and props
    expect(textInput).toHaveStyle({
      fontSize: 16,
      color: '#222',
      width: '90%',
      borderRadius: 50,
      paddingHorizontal: 20,
      borderWidth: 0.5,
      borderColor: '#999',
    });
    expect(toJSON).toMatchSnapshot();
  });

  test('renders with custom styles and props', () => {
    const { getByTestId } = render(
      <CTextInput
        testID="text-input"
        fs={18}
        c="blue"
        w={200}
        h={40}
        br={10}
        ph={15}
        bw={1}
        bc="#555"
        placeholder="Enter text here"
      />
    );
    const textInput = getByTestId('text-input');

    // Add assertions for custom styles and props
    expect(textInput).toHaveStyle({
      fontSize: 18,
      color: 'blue',
      width: 200,
      borderRadius: 10,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: '#555',
    });
  });

  test('handles placeholder correctly', () => {
    const { getByTestId } = render(
      <CTextInput testID="text-input" placeholder="Test Placeholder" />
    );
    const textInput = getByTestId('text-input');

    // Add assertions for placeholder text
    expect(textInput.props.placeholder).toBe('Test Placeholder');
  });

  // Add more tests as needed for specific functionality or user interactions
});
