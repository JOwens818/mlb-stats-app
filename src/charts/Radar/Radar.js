import React from 'react';
import {RadarChart} from '@carbon/charts-react';


const MLBRadar = (props) => {

  const getOptions = () => {
    
    return {
      "title": "Counting Stats (2015 - 2021)",
      "radar": {
        "axes": {
          "angle": "stat",
          "value": "value"
        },
        "alignment": "center"
      },
      "data": {
        "groupMapsTo": "player"
      },
      "legend": {
        "alignment": "center",
        "enabled": false
      },
      "color": {
        "scale": {
          [props.playerName]: "#f1c21b"
        }
      },
      "height": "400px"
    }
  }

  if (props.loading) {
    return null
  }

  return (
    <RadarChart 
      data={props.data}
      options={getOptions()}
    />
  );

};

export default MLBRadar;