import React from 'react';
import{ScatterChart} from '@carbon/charts-react';
import {Loading} from 'carbon-components-react';


const MLBScatter = (props) => {

  const getOptions = () => {
    
    return {
      "axes": {
        "bottom": {
          "title": "xwOBA",
          "mapsTo": "xwoba",
          "scaleType": "linear"
        },
        "left": {
          "title": props.field,
          "mapsTo": "selectedField",
          "scaleType": "linear"
        }
      },
      "legend": {
        "alignment": "center",
        "enabled": false
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
    <ScatterChart 
      data={props.data}
      options={getOptions()}
    />
  );

};

export default MLBScatter;