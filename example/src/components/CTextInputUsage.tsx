import React from 'react';
import { CTextInput } from 'rn-fast-ui';

const CTextInputUsage = () => {
  return (
    <>
      {/* CTextInput component ************************************************** */}

      {/*
      
       - Default CTextInput
       - Only call the component and pass required prop(children) and it will render with default styles
      
      */}

      <CTextInput />

      {/* 

      - Customised CTextInput
      - Only pass the props you would like to change,
      they will overide the default ones

      */}
      {/* <CTextInput placeholder="Custom placeholder" br={5} /> */}
      <CTextInput placeholder="Custom input" br={5} bw={1} bc="gray" />
    </>
  );
};

export default CTextInputUsage;
