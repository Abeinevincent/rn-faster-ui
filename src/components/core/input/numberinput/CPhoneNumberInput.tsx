import React from 'react';
import PhoneInput from 'react-native-phone-number-input';
import type { ICPhoneNumberInput } from './CPhoneNumberInput.type';

export const CPhoneNumberInput = (props: ICPhoneNumberInput) => {
  return (
    <PhoneInput
      defaultCode={props.defaultCode}
      withDarkTheme={props.withDarkTheme}
      withShadow={props.withShadow}
      autoFocus={props.autoFocus}
      defaultValue={props.defaultValue}
      value={props.value}
      disabled={props.disabled}
      disableArrowIcon={props.disableArrowIcon}
      placeholder={props.placeholder}
      onChangeCountry={props.onChangeCountry}
      onChangeText={props.onChangeText}
      onChangeFormattedText={props.onChangeFormattedText}
      containerStyle={props.containerStyle}
      renderDropdownImage={props.renderDropdownImage}
      textInputProps={props.textInputProps}
      textInputStyle={props.textInputStyle}
      codeTextStyle={props.codeTextStyle}
      flagButtonStyle={props.flagButtonStyle}
      countryPickerButtonStyle={props.countryPickerButtonStyle}
      layout={props.layout}
      textContainerStyle={props.textContainerStyle}
      filterProps={props.filterProps}
      countryPickerProps={props.countryPickerProps}
    />
  );
};
