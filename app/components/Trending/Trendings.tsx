"use client"
import React from 'react';
import TrendingsList from './TrendingsList';
import { TrendingContextProvider } from "../../context/TrendingContext";
import H1 from '../Base/H1/H1';

export default function Trendings() {
 
  return (
    <TrendingContextProvider>
      <H1>Trending github repositories</H1>
      <TrendingsList />
    </TrendingContextProvider>
  );
}
