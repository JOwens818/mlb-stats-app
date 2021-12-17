import React, {useEffect, useState} from 'react';
import {
  SkeletonText,
  Button
} from 'carbon-components-react';
import {PictogramItem} from '@carbon/ibmdotcom-react';
import MLBDataTable from '../../components/DataTable/DataTable';
import MLBRadar from '../../charts/Radar/Radar';
import MLBLine from '../../charts/Line/Line';
import {getPredictedStatsAll, getRadarData, getLineData, getPlayerData} from '../../services/statservice.js';
import { ArrowRight16 } from '@carbon/icons-react';
import {UserAnalytics, ChartRadar} from '@carbon/pictograms-react';


const PlayerPredictions = () => {

  const [tblHeaders, setTblHeaders] = useState([]);
  const [tblRows, setTblRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profileMode, setProfileMode] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [radarData, setRadarData] = useState([]);
  const [lineData, setLineData] = useState([]);


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
    setProfileMode(false);
    const resp = await getPredictedStatsAll();
    setTblRows(resp);
    setTblHeaders(getRowHeaderNames(resp[0]));
    setLoading(false);
  }


  const getPlayerProfileData = async (playerID) => {
    setLoading(true);
    setProfileMode(true);
    const respRadar = await getRadarData(playerID);
    const respLine = await getLineData(playerID);
    const respPlayer = await getPlayerData(playerID);
    setPlayerName(respRadar[0]["player"]);
    setRadarData(respRadar);
    setLineData(respLine);
    setTblRows(respPlayer);
    setTblHeaders(getRowHeaderNames(respPlayer[0]));
    setLoading(false);
  }


  useEffect(() => {
    getAllPredictedData();
  }, []);


  return (
    <div className="bx--grid back">

        {
          !profileMode && 
          <>
            <div className='bx--row landing-page__r2'>
              <div className='bx--col-sm-4 bx--col-lg-8 cta-card'>
                <PictogramItem 
                  heading="Predicted Data"
                  copy="Easily sort by any column or use the filter to search for your favorite player!"
                  pictogram={{
                    src: UserAnalytics
                  }}
                />
              </div>
              <div className='bx--col-sm-4 bx--col-lg-8 cta-card'>
                <PictogramItem 
                  heading="Dive Deep"
                  copy="View in-depth player analysis by choosing 'Player Profile' from the overflow menu"
                  pictogram={{
                    src: ChartRadar
                  }}
                />
              </div>
            </div>
            <div className='bx--row playerDataTable'>
              <div className='bx--col-lg-16'>
                <MLBDataTable 
                  loading={loading}
                  tblHeaders={tblHeaders}
                  tblRows={tblRows}
                  profileMode={profileMode}
                  sendPlayerID={getPlayerProfileData}
                />
              </div>
            </div>
          </>
        }
        
        {
          profileMode && 
          <>
            <div className='bx--row landing-page__r2 heading'>
              <div className="bx--col-lg-8">
                {
                  loading ? <SkeletonText paragraph lineCount={2} width={"50%"}/>
                  : <h3 className="profileHeader">{playerName}</h3>
                }
              </div>
              <div className="bx--col-lg-3 bx--offset-lg-5">
                <Button
                  kind="ghost"
                  onClick={getAllPredictedData}
                  renderIcon={ArrowRight16}
                  iconDescription='Back To Predictions'
                >
                Back to Predictions
                </Button>
              </div>
            </div>
            <div className='bx--row'>
              <div className='bx--col-lg-8'>
                <MLBRadar 
                  data={radarData}
                  loading={loading}
                />
              </div>
              <div className='bx--col-lg-8'>
                <MLBLine
                  data={lineData}
                  loading={loading}
                />
              </div>
            </div>
            <div className='bx--row playerDataTable'>
              <div className='bx--col-lg-16'>
                <MLBDataTable 
                  loading={loading}
                  tblHeaders={tblHeaders}
                  tblRows={tblRows}
                  profileMode={profileMode}
                  sendPlayerID={getPlayerProfileData}
                />
              </div>
            </div>
          </>
        }
        

      
    </div>
  );
};

export default PlayerPredictions;