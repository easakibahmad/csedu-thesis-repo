import React from 'react';
import CardTwoCol2 from './CardTwoCol2';
import CardTwoCol3 from './CardTwoCol3';
import CardOneCol from './CardOneCol';

const MidSectionTwo = () => {
    return (
      <div className="grid grid-cols-2 gap-6">
        <div className=' mb-8'>
          <CardOneCol></CardOneCol>
        </div>
        <div className="grid cols-1 gap-6">
                <CardTwoCol2></CardTwoCol2>
                <CardTwoCol3></CardTwoCol3>
        </div>
      </div>
    );
};

export default MidSectionTwo;