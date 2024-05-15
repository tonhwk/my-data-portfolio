// Home.js
import React from 'react';



import IntroductionCard from '../../components/IntroductionCard/IntroductionCard';
import DataSkillCards from "../../components/DataSkillCards/DataSkillCards"
import Footer from '../../components/Footer';






function Home() {
  return (
    <div>
      <IntroductionCard />
      <DataSkillCards />
      <Footer />
    </div>
  );
}

export default Home;
