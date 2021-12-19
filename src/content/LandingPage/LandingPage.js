import React from 'react';
import {LeadSpace} from '@carbon/ibmdotcom-react';
import {ArrowRight20} from '@carbon/icons-react';
import {PictogramItem} from '@carbon/ibmdotcom-react';
import {Question, SupportServices} from '@carbon/pictograms-react';

const LandingPage = () => {

  return (
    <div className='bx--grid--full-width back'>
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
                href: "#/predictions"
              }
            ]}
            image={{
              defaultSrc: '/landing.png',
              alt: 'Baseball picture close up'
            }}
          />
        </div>
      </div>
      <div className='bx--row pictoRow'>
        <div className='bx--col-sm-4 bx--col-lg-8'>
          <PictogramItem 
            heading="What is xwOBA?"
            copy="Want to know why xwOBA is so important?"
            cta={{
              type: "external",
              href: "https://www.mlb.com/glossary/statcast/expected-woba",
              copy: "See Statcast Overview"
            }}
            pictogram={{
              src: Question
            }}
          />
        </div>
        <div className='bx--col-sm-4 bx--col-lg-8'>
          <PictogramItem 
            heading="Contact Us"
            copy="Feedback is a gift.  Let us know what you think!"
            pictogram={{
              src: SupportServices
            }}
          />
        </div>
      </div>
    </div>
  );


  };

export default LandingPage;