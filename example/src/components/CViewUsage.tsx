import React from 'react';
import { CView, CText, colors } from 'rn-faster-ui';
import { screenHeight } from '../../../src/components/utils/dimensions';

const CViewUsage = () => {
  return (
    <>
      {/* CView component ************************************************** */}

      {/*
      
       - Default view
       - Only call the component and pass required prop(children) and it will render with default styles
      
      */}

      <CView bgc={colors.red?.[400]} children={<CText>Hello</CText>} />

      {/* OR */}
      {/*
        <CView>
        // content/children here
        </CView>
      */}

      {/* 
        - Customised CView
        - Only pass the props you would like to change,
        they will overide the default ones
      */}

      <CView
        w={'50%'}
        ph={20}
        bgc={'blue'}
        h={screenHeight * 0.3}
        // pn="absolute"
        // t={'40%'}
        l={20}
        zi={-1}
        children={
          <CText
            c="white"
            ta="center"
            fs={18}
            children={'Customised CView Component'}
          />
        }
      />
    </>
  );
};

export default CViewUsage;
