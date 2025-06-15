# 📄 Job Application Form – Nettbureau Case Assignment
This project was created as a response to a junior developer case assignment.

<img width="1333" alt="Skjermbilde 2025-06-16 kl  00 41 04" src="https://github.com/user-attachments/assets/c2d95f5d-fad7-40b2-9727-f6295b75a712" />


## The Task

Build a dynamic React application that:
1. Reads a JSON object describing a form  
2. Renders form fields based on the content of the JSON  
3. Validates input and displays error messages  
4. Logs the submitted form data to the console  

## Evaluation Criteria

- Ability to use a JSON structure to build a user interface  
- Component and code structure  
- Logical thinking and validation handling  
- Basic user experience: labeling, error messages, clarity  

## Technologies Used

- **React** with TypeScript  
- **Tailwind CSS** for styling  
- **JSDoc** for inline documentation   

## Project Structure

components/ – Reusable form components
- ConfigErrorFallback.tsx
- FormCheckboxGroup.tsx
- FormInput.tsx
- FormRadio.tsx
- FormRenderer
- FormSelect.tsx
- FormTextarea.tsx

config/ – JSON-based form definition and skill mapping
- jobApplicationForm.ts
- positionSkills.ts

types/ – Shared type definitions
- formTypes.ts

utils/ – Core form logic
- getFilteredConfig.ts
- handleChange.ts
- validateForm.ts
- validateConfig.ts

App.tsx – Entry point


## How to Use

```bash
npm install
npm run dev
```

- Select a position and see relevant skill options update dynamically
- Try submitting with incomplete or invalid input to see validation in action
- Open your console to view submitted form data

## Notes
- The config validator prevents rendering if the JSON is misconfigured (e.g. invalid type, missing label)
- The user never sees raw error logs — instead, a friendly message is shown if the developer makes a mistake
