import React from 'react';
import type { Metadata } from "next";
import Trendings from './components/Trending/Trendings';

export const metadata: Metadata = {
  title: "Github Trend Repository",
  description: "Getting the last week github trending repository",
};

export default function Home() {

  return (
    <main>
      <Trendings />
    </main>
  );
}
