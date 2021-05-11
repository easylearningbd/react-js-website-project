import React from 'react';
import TopBanner from './components/TopBanner/TopBanner';
import Services from './components/Services/Services';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Analysis from './components/Analysis/Analysis';
import Summary from './components/Summary/Summary';
import RecentProject from './components/RecentProject/RecentProject';
function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <RecentProject />
    </div>
  );
}

export default App;
