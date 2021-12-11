import React, {useEffect, useState} from 'react';
import {Tab, Tabs, Select, SelectItem} from 'carbon-components-react';
import MLBHistogram from '../../charts/Histogram/Histogram.js';
import {getHistogramData} from '../../services/statservice.js';



const ExploreData = () => {

  const [histData, setHistData] = useState([]);
  const [histLoading, setHistLoading] = useState(false);
  const [histFirstRun, setHistFirstRun] = useState(true);
  const [histField, setHistField] = useState("");



  const getHistData = async (field) => {
    setHistLoading(true);
    let data = await getHistogramData(field);
    setHistData(data);
    setHistLoading(false);
    setHistFirstRun(false);
  }



  const onHistSelectChange = e => {
    setHistField(e.target.value);
    getHistData(e.target.value);
  }



  const histSelectChildren = [
    <SelectItem disabled hidden key='def' value='def' text='Choose an option' />,
    <SelectItem key="PLAYER_AGE" value='PLAYER_AGE' text="Player Age" />,
    <SelectItem key="B_HOME_RUN" value='B_HOME_RUN' text="Home Run" />,
    <SelectItem key="B_RBI" value='B_RBI' text="RBI" />,
    <SelectItem key="B_TOTAL_PA" value='B_TOTAL_PA' text="Plate Appearances" />,
    <SelectItem key="B_GAME" value='B_GAME' text="Games Played" />
  ];


  const props = {
    tabs: {
      selected: 0,
      triggerHref: '#',
      role: 'navigation',
    },
    tab: {
      href: '#',
      role: 'presentation',
      tabIndex: 0,
    },
  };


  return (
    <div className="bx--grid--full-width back">
      <div className='bx--row landing-page__r2'>
        <div className="bx--col bx--no-gutter">
          
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="Univariate">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
          
                  <div className='bx--col-lg-4'>
                    <Select id="histSelect" 
                      labelText="Select Feature"
                      defaultValue="def"
                      children = {histSelectChildren}
                      onChange = {onHistSelectChange}
                    />
                  </div>
                  <div className='bx--col-lg-12'>
                    <MLBHistogram 
                      data={histData}
                      loading={histLoading}
                      firstRun={histFirstRun}
                      field={histField}
                    />
                  </div>

                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Multivariate">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
   
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Correlation">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
     
                </div>
              </div>
            </Tab>
          </Tabs>

        </div>
      </div>
    </div>
  );

};

export default ExploreData;