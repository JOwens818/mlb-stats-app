import React, {useEffect, useState} from 'react';
import {  
  Select,
  SelectItem
} from 'carbon-components-react';
import MLBDataTable from '../../components/DataTable/DataTable';
import {getPredictedStatsAll} from '../../services/statservice.js';


const PlayerPredictions = () => {

  const [tblHeaders, setTblHeaders] = useState([]);
  const [tblRows, setTblRows] = useState([]);
  const [loading, setLoading] = useState(true);


  const getRowHeaderNames = (data) => {

    const headers = [];

    const keys = Object.keys(data);
    for (const key of keys) {
      headers.push({
        key: key,
        header: key
      });
    }
    return headers;
  }



  const getAllPredictedData = async () => {
    setLoading(true);
    const resp = await getPredictedStatsAll();
    setTblRows(resp);
    setTblHeaders(getRowHeaderNames(resp[0]));
    setLoading(false);
  }


  useEffect(() => {
    getAllPredictedData();
  }, []);


  return (
    <div className="bx--grid--full-width back">
      <div className='bx--row landing-page__r2'>
        <div className='bx--col-lg-16'>
          <MLBDataTable 
            loading={loading}
            tblHeaders={tblHeaders}
            tblRows={tblRows}
          />
        </div>

      </div>
    </div>
  );
};

export default PlayerPredictions;