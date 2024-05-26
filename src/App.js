import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "./pages/Home/"
import AdvancedDataAnalysisPage from "./pages/AdvancedDataAnalysisTechniques/Advanced"
import RealWorldDataProjectsPage from './pages/RealWorldDataProjects/RealWorldDataProjects';
import Visualizations from './pages/Visualizations/Visualizations';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import DataCleaning from './pages/DataCleaning';
import DataIntegration from './pages/DataIntegration/DataIntegration';
import DataEngineering from './pages/DataEngineering/DataEngineering';
import AdvancedSQL from './pages/AdvancedSQL';
import NLP from './pages/Natural LanguageProcessing/NaturalLanguageProcessing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advanced_data_analysis" element={ <AdvancedDataAnalysisPage />} />
        <Route path="/real_world_data_projects" element={ < RealWorldDataProjectsPage/>} />
        <Route path="/visualizations" element={ < Visualizations/>} />
        <Route path="/privacy-policy" element={ < PrivacyPolicy/>} />
        <Route path="/data-cleaning" element={ < DataCleaning/>} />
        <Route path="/data-integration" element={ < DataIntegration/>} />
        <Route path="/data-engineering" element={ < DataEngineering/>} />
        <Route path="/advanced-sql-analysis" element={ < AdvancedSQL/>} />
        <Route path="/nlp-analysis" element={ < NLP/>} />
      </Routes>
    </Router>

  )
  
}

export default App;
