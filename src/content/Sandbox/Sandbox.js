import React, {useEffect, useState} from 'react';
import {
  TextInput
} from 'carbon-components-react';


const ModelSandbox = () => {

  const [prodNest, setProdNest] = useState(100)



  return (
    <div className="bx--grid--full-width back">
      <div className='bx--row landing-page__r2'>
        <div className='bx--col-lg-2 prod-lbl'>
          <h4>Production</h4>
        </div>
        <div className='bx--col-lg-2'>
          <TextInput 
            labelText="n_estimators"
            id="n-estimators"
            type="text"
            size="sm"
            disabled
            value={prodNest}
          />
        </div>
        <div className='bx--col-lg-2'>
          <TextInput 
            labelText="subsample"
            id="subsample"
            type="text"
            size="sm"
            disabled
          />
        </div>
        <div className='bx--col-lg-2'>
          <TextInput 
            labelText="max_depth"
            id="max_depth"
            type="text"
            size="sm"
            disabled
          />
        </div>
        <div className='bx--col-lg-2'>
          <TextInput 
            labelText="learning_rate"
            id="learning_rate"
            type="text"
            size="sm"
            disabled
          />
        </div>
        <div className='bx--col-lg-2'>
          <TextInput 
            labelText="gamma"
            id="gamma"
            type="text"
            size="sm"
            disabled
          />
        </div>
        <div className='bx--col-lg-2'>
          <TextInput 
            labelText="reg_alpha"
            id="reg_alpha"
            type="text"
            size="sm"
            disabled
          />
        </div>
        <div className='bx--col-lg-2'>
          <TextInput 
            labelText="reg_lambda"
            id="reg_lambda"
            type="text"
            size="sm"
            disabled
          />
        </div>
        
      </div>
    </div>
  );

};

export default ModelSandbox;