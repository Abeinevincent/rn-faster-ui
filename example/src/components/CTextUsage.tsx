import React from 'react';
import { CText } from 'react-native-fastui';

const CTextUsage = () => {
  return (
    <>
      {/* CText component ************************************************** */}

      {/*
      
       - Default text
       - Only call the component and pass required prop(children) and it will render with default styles
      
      */}

      <CText children={'CText with Default Styles'} />

      {/* 

      - Customised text
      - Only pass the props you would like to change,
      they will overide the default ones

      */}
      <CText
        c="green"
        tdl="underline"
        ph={20}
        fw="bold"
        fs={22}
        children={'Custom CText'}
      />
    </>
  );
};

export default CTextUsage;
