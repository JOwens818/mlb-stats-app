import React from 'react';
import{HistogramChart} from '@carbon/charts-react';
import {Loading} from 'carbon-components-react';

const MLBHistogram = (props) => {


  const getOptions = () => {
    
    return {
      "axes": {
        "bottom": {
          "title": props.field,
          "mapsTo": "value",
          "bins": 60,
          "limitDomainToBins": true
        },
        "left": {
          "title": "Count",
          "scaleType": "linear",
          "binned": true
        }
      },
      "legend": {
        "alignment": "center"
      },
      "color": {
        "scale": {
          "histdata": "#0f62fe"
        }
      },
      "height": "400px"
    }
  }
  
  if (props.firstRun) {
    return null;
  }

  if (!props.firstRun && props.loading) {
    return <Loading />
  }

  return (
    <HistogramChart 
      data={props.data}
      options={getOptions()}>
    </HistogramChart>
  );

};

export default MLBHistogram;