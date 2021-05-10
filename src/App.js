import React from 'react';
import TopBanner from './components/TopBanner/TopBanner';
import Services from './components/Services/Services';
import TopNavigation from './components/TopNavigation/TopNavigation';
function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
    </div>
  );
}

export default App;
