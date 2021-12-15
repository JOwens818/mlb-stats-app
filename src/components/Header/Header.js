import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
} from 'carbon-components-react';
import { Link } from 'react-router-dom';

const MLBHeader = () => (
  <Header aria-label="Carbon Tutorial">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="AMS">MLB Stat Predictor</HeaderName>
    <HeaderNavigation aria-label="">
      <HeaderMenuItem element={Link} to="/explore">Explore Data</HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/predictions">View Predictions</HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/">Model Tuning</HeaderMenuItem>
    </HeaderNavigation>
  </Header>
);

export default MLBHeader;