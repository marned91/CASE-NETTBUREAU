import React from 'react';
import './App.css';
import { FormRenderer } from './components/FormRenderer';
import { jobApplicationForm } from './config/jobApplicationForm';

function App() {
  return (
    <div className="bg-light">
      <FormRenderer config={jobApplicationForm} />
    </div>
  );
}

export default App;
