import React from 'react';
import './App.css';
import { FormRenderer } from './components/FormRenderer';
import { jobApplicationForm } from './config/jobApplicationForm';

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-light to-darkFade py-12 px-6 md:px-0">
      <div className="w-full max-w-2xl">
        <FormRenderer config={jobApplicationForm} />
      </div>
    </div>
  );
}

export default App;
