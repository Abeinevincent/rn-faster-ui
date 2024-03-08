import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome6Pro from 'react-native-vector-icons/FontAwesome6Pro';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';
import type { IconProps } from 'react-native-vector-icons/Icon';

export interface ICIcon extends IconProps {
  family:
    | 'Octicons'
    | 'FontAwesome6Pro'
    | 'Foundation'
    | 'FontAwesome6'
    | 'FontAwesome5Pro'
    | 'EvilIcons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Feather'
    | 'Fontisto'
    | 'FontAwesome'
    | 'Entypo'
    | 'Ionicons'
    | 'FontAwesome5'
    | 'AntDesign';
  name: string;
  size?: number;
  color?: string;
  [key: string]: any; // Allow any additional props
}

export const CIcon: React.FC<ICIcon> = ({
  name,
  family,
  size = 24,
  color = 'black',
  ...rest
}) => {
  return (
    <>
      {family === 'Ionicons' ? (
        <Ionicons
          testID="test-icon"
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      ) : family === 'AntDesign' ? (
        <AntDesign
          testID="test-icon"
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      ) : family === 'EvilIcons' ? (
        <EvilIcons
          testID="test-icon"
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      ) : family === 'MaterialCommunityIcons' ? (
        <MaterialCommunityIcons
          testID="test-icon"
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      ) : family === 'MaterialIcons' ? (
        <MaterialIcons
          testID="test-icon"
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      ) : family === 'Feather' ? (
        <Feather
          testID="test-icon"
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      ) : family === 'Fontisto' ? (
        <Fontisto
          testID="test-icon"
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      ) : family === 'FontAwesome' ? (
        <FontAwesome
          testID="test-icon"
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      ) : family === 'FontAwesome5' ? (
        <FontAwesome5
          testID="test-icon"
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      ) : family === 'Entypo' ? (
        <Entypo
          testID="test-icon"
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      ) : family === 'FontAwesome5Pro' ? (
        <FontAwesome5Pro
          testID="test-icon"
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      ) : family === 'FontAwesome6Pro' ? (
        <FontAwesome6Pro
          testID="test-icon"
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      ) : family === 'FontAwesome6' ? (
        <FontAwesome6
          testID="test-icon"
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      ) : family === 'Foundation' ? (
        <Foundation
          testID="test-icon"
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      ) : family === 'Octicons' ? (
        <Octicons
          testID="test-icon"
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      ) : null}
    </>
  );
};
