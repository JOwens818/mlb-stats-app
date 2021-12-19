import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
  SideNav,
  HeaderMenuButton,
  SideNavItems,
  SideNavLink,
  HeaderContainer
} from 'carbon-components-react';
import { Explore16, TennisBall16, ModelBuilder16, Development16 } from '@carbon/icons-react';
import { Link } from 'react-router-dom';

const MLBHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <>
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            isCollapsible
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName element={Link} to="/" prefix="AMS">MLB Stat Predictor</HeaderName>
          <HeaderNavigation aria-label="">
            <HeaderMenuItem element={Link} to="/explore">Explore Data</HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/predictions">View Predictions</HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/sandbox">Model Sandbox</HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/predict-now">Predict Now!</HeaderMenuItem>
          </HeaderNavigation>

          <SideNav aria-label="Side navigation" isPersistent={false} expanded={isSideNavExpanded}>
            <SideNavItems>
              <SideNavLink renderIcon={Explore16} element={Link} to="/explore">
                Explore Data
              </SideNavLink>
              <SideNavLink renderIcon={ModelBuilder16} element={Link} to="/predictions">
                View Predictions
              </SideNavLink>
              <SideNavLink renderIcon={Development16} element={Link} to="/sandbox">
                Model Sandbox
              </SideNavLink>
              <SideNavLink renderIcon={TennisBall16} element={Link} to="/predict-now">
                Predict Now!
              </SideNavLink>
            </SideNavItems>
          </SideNav>
        </Header>
      </>
    )}
  />
);

export default MLBHeader;