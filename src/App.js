import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import {Content} from 'carbon-components-react';
import MLBHeader from './components/Header/Header';
import LandingPage from './content/LandingPage';
import ExploreData from './content/Explore/Explore';

function App() {
  return (
    <>
      <MLBHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/explore" component={ExploreData} />
          </Switch>
        </Content>
    </>
  );
}

export default App;
