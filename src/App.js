import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import {Content} from 'carbon-components-react';
import MLBHeader from './components/Header/Header';
import LandingPage from './content/LandingPage';
import ExploreData from './content/Explore/Explore';
import PlayerPredictions from './content/Prediction/Prediction';
import ModelSandbox from './content/Sandbox/Sandbox';
import RealTimePredict from './content/RealTimePred/RealTimePred';

function App() {
  return (
    <>
      <MLBHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/explore" component={ExploreData} />
            <Route exact path="/predictions" component={PlayerPredictions} />
            <Route exact path="/sandbox" component={ModelSandbox} />
            <Route exact path="/predict-now" component={RealTimePredict} />
          </Switch>
        </Content>
    </>
  );
}

export default App;
