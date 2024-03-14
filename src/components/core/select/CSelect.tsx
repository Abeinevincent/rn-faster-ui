import React from 'react';
import SelectBox from 'react-native-multi-selectbox';
import type { ICSelect } from './CSelect.type';

export const CSelect = (props: ICSelect) => {
  return (
    <SelectBox
      options={props.options}
      label={props.label}
      onChange={props.onChange}
      onMultiSelect={props.onMultiSelect}
      onTapClose={props.onTapClose}
      inputPlaceholder={props.inputPlaceholder}
      listEmptyText={props.listEmptyText}
      width={props.width}
      viewMargin={props.viewMargin}
      isMulti={props.isMulti}
      hideInputFilter={props.hideInputFilter}
      selectedValues={props.selectedValues}
      value={props.value}
      selectIcon={props.selectIcon}
      labelStyle={props.labelStyle}
      containerStyle={props.containerStyle}
      inputFilterContainerStyle={props.inputFilterContainerStyle}
      inputFilterStyle={props.inputFilterStyle}
      multiOptionContainerStyle={props.multiOptionContainerStyle}
      multiOptionsLabelStyle={props.multiOptionsLabelStyle}
      listEmptyLabelStyle={props.listEmptyLabelStyle}
      multiListEmptyLabelStyle={props.multiOptionsLabelStyle}
      selectedItemStyle={props.selectedItemStyle}
      searchInputProps={props.searchInputProps}
      multiSelectInputFieldProps={props.multiSelectInputFieldProps}
      listOptionProps={props.listOptionProps}
      arrowIconColor={props.arrowIconColor}
      searchIconColor={props.searchIconColor}
      toggleIconColor={props.toggleIconColor}
    />
  );
};
