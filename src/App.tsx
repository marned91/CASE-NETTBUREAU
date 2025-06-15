import React from 'react';
import './App.css';
import { FormRenderer } from './components/FormRenderer';
import { jobApplicationForm } from './config/jobApplicationForm';

function App() {
  return (
    <div className="bg-gradient-to-b from-light to-darkFade p-10">
      <FormRenderer config={jobApplicationForm} />
    </div>
  );
}

export default App;
