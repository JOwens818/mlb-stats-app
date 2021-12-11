import React from 'react';
import {LeadSpace} from '@carbon/ibmdotcom-react';
import {ArrowRight20} from '@carbon/icons-react';


const LandingPage = () => {

  return (
    <div className='bx--grid--full-width'>
      <div className='bx--row'>
        <div className='bx--col-sm-4 bx--col-lg-16'>
          <LeadSpace 
            type='default'
            size='tall'
            theme='g100'
            title='MLB Predictive Model'
            copy='Explore and predict xwOBA for MLB Players'
            buttons={[
              {
                copy: "View Predictions",
                renderIcon: ArrowRight20,
                href: "#"
              }
            ]}
            image={{
              defaultSrc: '/landing.png',
              alt: 'Baseball picture close up'
            }}
          />
        </div>
      </div>
    </div>
  );


  };

export default LandingPage;