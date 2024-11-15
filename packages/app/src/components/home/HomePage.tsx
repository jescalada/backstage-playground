import React from 'react';
import { Grid } from '@material-ui/core';
import {
  HomePageRandomJoke,
  HomePageStarredEntities,
} from '@backstage/plugin-home';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { HomePageCalendar } from '@backstage/plugin-gcalendar';

export const homePage = (
  <Grid container spacing={3}>
    {/* Left Column */}
    <Grid item xs={12} md={6} lg={4}>
      <HomePageSearchBar />
      <HomePageRandomJoke />
    </Grid>

    {/* Middle Column */}
    <Grid item xs={12} md={6} lg={4}>
      <HomePageCalendar />
    </Grid>

    {/* Right Column */}
    <Grid item xs={12} md={6} lg={4}>
      <HomePageStarredEntities />
    </Grid>
  </Grid>
);
