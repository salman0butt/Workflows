import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WorkFlowManager from "./pages/WorkFlowManager";
import WorkFlowBuilder from "./pages/WorkFlowBuilder";
import WorkFlowPage from "./pages/WorkFlowPage";
import Header from "./components/Header";

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<WorkFlowManager />} />
            <Route path="/workflows" element={<WorkFlowPage />} />
            <Route path="/workflow/:workflowId" element={<WorkFlowBuilder />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
