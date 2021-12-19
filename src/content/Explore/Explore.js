import React, {useEffect, useState} from 'react';
import MLBHistogram from '../../charts/Histogram/Histogram.js';
import MLBScatter from '../../charts/Scatter/Scatter.js';
import {getHistogramData, getHistogramStats, getScatterData} from '../../services/statservice.js';
import {
  Tab,
  Tabs,
  Select,
  SelectItem,
  StructuredListBody,
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell
} from 'carbon-components-react';


const ExploreData = () => {

  const [histData, setHistData] = useState([]);
  const [histStats, setHistStats] = useState([]);
  const [histLoading, setHistLoading] = useState(false);
  const [histFirstRun, setHistFirstRun] = useState(true);
  const [histField, setHistField] = useState("");
  const [scatterData, setScatterData] = useState([]);
  const [scatterLoading, setScatterLoading] = useState(false);
  const [scatterFirstRun, setScatterFirstRun] = useState(true);
  const [scatterField, setScatterField] = useState("");
  const [hasError, setHasError] = useState(false);


  const getHistData = async (field) => {
    setHistLoading(true);
    setHistFirstRun(false);
    let hist_data = await getHistogramData(field);
    let hist_stats = await getHistogramStats(field);
    hasErrorInResponse(hist_data);
    hasErrorInResponse(hist_stats);
    setHistData(hist_data);
    setHistStats(hist_stats);
    setHistLoading(false);
  }


  const getScatData = async (field) => {
    setScatterLoading(true);
    setScatterFirstRun(false);
    let scat_data = await getScatterData(field);
    hasErrorInResponse(scat_data);
    setScatterData(scat_data);
    setScatterLoading(false);
  }


  const onHistSelectChange = e => {
    setHistField(e.target.value);
    getHistData(e.target.value);
  }


  const onScatterSelectChange = e => {
    setScatterField(e.target.value);
    getScatData(e.target.value);
  }


  const hasErrorInResponse = (resp) => {
    if (typeof resp === 'undefined' || 'errorMsg' in resp) {
      setHasError(true);
    }
  }


  const onTabSelect = () => {
/*       setScatterFirstRun(true);
      setScatterData([]);
      setHistFirstRun(true);
      setHistData([]); */
    
  }


  const histSelectChildren = [
    <SelectItem disabled hidden key='def' value='def' text='Choose an option' />,
    <SelectItem key="PLAYER_AGE" value='PLAYER_AGE' text="Player Age" />,
    <SelectItem key="B_HOME_RUN" value='B_HOME_RUN' text="Home Run" />,
    <SelectItem key="B_RBI" value='B_RBI' text="RBI" />,
    <SelectItem key="B_TOTAL_PA" value='B_TOTAL_PA' text="Plate Appearances" />,
    <SelectItem key="B_TOTAL_HITS" value='B_TOTAL_HITS' text="Hits" />,
    <SelectItem key="BATTING_AVG" value='BATTING_AVG' text="Batting Average" />,
    <SelectItem key="ON_BASE_PERCENT" value='ON_BASE_PERCENT' text="On Base Percentage" />,
    <SelectItem key="ON_BASE_PLUS_SLG" value='ON_BASE_PLUS_SLG' text="OPS" />,
    <SelectItem key="SLG_PERCENT" value='SLG_PERCENT' text="Slugging Percentage" />,
    <SelectItem key="ISOLATED_POWER" value='ISOLATED_POWER' text="Isolated Power" />,
    <SelectItem key="XWOBA" value='XWOBA' text="xwOBA" />
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

  if (hasError) {
    return (
      <div className='errorMsg'>
        <h1>Oops... Something went wrong</h1>
        <h4>Try refreshing the page or come back later</h4>
      </div>
    );
  }

  return (
    <div className="bx--grid--full-width back">
      <div className='bx--row landing-page__r2'>
        <div className="bx--col bx--no-gutter">
          
          <Tabs {...props.tabs} onSelectionChange={onTabSelect} aria-label="Tab navigation">
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
                  <div className='bx--col-lg-12 header'>
                    <h4>Explore the distribution of stats for completed seasons (2015 - 2021)</h4>
                  </div>

                </div>
                <div className="bx--row">
                  <div className='bx--col-lg-4 structured-list'>
                    {
                      histLoading || histFirstRun ? null : 
                      <StructuredListWrapper>
                        <StructuredListBody>
                          <StructuredListRow>
                            <StructuredListCell>Min</StructuredListCell>
                            <StructuredListCell>{histStats[0]["min"]}</StructuredListCell>
                          </StructuredListRow>
                          <StructuredListRow>
                            <StructuredListCell>Max</StructuredListCell>
                            <StructuredListCell>{histStats[0]["max"]}</StructuredListCell>
                          </StructuredListRow>
                          <StructuredListRow>
                            <StructuredListCell>Avg</StructuredListCell>
                            <StructuredListCell>{histStats[0]["avg"]}</StructuredListCell>
                          </StructuredListRow>
                          <StructuredListRow>
                            <StructuredListCell>Median</StructuredListCell>
                            <StructuredListCell>{histStats[0]["median"]}</StructuredListCell>
                          </StructuredListRow>
                          <StructuredListRow>
                            <StructuredListCell>Mode</StructuredListCell>
                            <StructuredListCell>{histStats[0]["mode"]}</StructuredListCell>
                          </StructuredListRow>
                        </StructuredListBody>
                      </StructuredListWrapper>
                    }
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
          
                  <div className='bx--col-lg-4'>
                    <Select id="scatterSelect" 
                      labelText="Select Feature"
                      defaultValue="def"
                      children = {histSelectChildren}
                      onChange = {onScatterSelectChange}
                    />
                  </div>
                  <div className='bx--col-lg-12 header'>
                    <h4>Explore the correlation between selected feature and xwOBA</h4>
                  </div>

                </div>
                <div className="bx--row">

                  <div className='bx--col-lg-12 bx--offset-lg-4'>
                    <MLBScatter 
                      data={scatterData}
                      loading={scatterLoading}
                      firstRun={scatterFirstRun}
                      field={scatterField}
                    />
                  </div>
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