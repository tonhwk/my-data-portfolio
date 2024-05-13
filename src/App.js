import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "./pages/Home/"
import AdvancedDataAnalysisPage from "./pages/AdvancedDataAnalysisTechniques/Advanced"
import RealWorldDataProjectsPage from './pages/RealWorldDataProjects/RealWorldDataProjects';
import Visualizations from './pages/Visualizations/Visualizations';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advanced_data_analysis" element={ <AdvancedDataAnalysisPage />} />
        <Route path="/real_world_data_projects" element={ < RealWorldDataProjectsPage/>} />
        <Route path="/visualizations" element={ < Visualizations/>} />
      </Routes>
    </Router>

  )
  
}

export default App;
