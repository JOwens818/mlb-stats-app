import React from 'react';
import {LineChart} from '@carbon/charts-react';


const MLBLine = (props) => {

    const getOptions = () => {
    
      return {
        "title": "Stats By Year (2015 - 2021)",
        "axes": {
          "bottom": {
            "mapsTo": "key",
            "title": "Year",
            "scaleType": "labels"
          },
          "left": {
            "mapsTo": "value",
            "scaleType": "linear"
          }
        },
        "legend": {
          "alignment": "center"
        },
        "data": {
          "selectedGroups": [
            "xwOBA",
            "AVG"
          ]
        },
        "curve": "curveMonotoneX",
        "height": "400px"
      }
      }
    
      if (props.loading) {
        return null
      }


      return (
        <LineChart 
          data={props.data}
          options={getOptions()}
        />
      );
};

export default MLBLine;