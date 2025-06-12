import type { FormConfig } from '../types/formTypes';

export const jobApplicationForm: FormConfig = {
  title: 'Job Application Form',
  fields: [
    {
      label: 'Full Name',
      name: 'fullName',
      type: 'text',
      required: true,
      minLength: 3,
      errorMessage: 'Full name must be at least 3 characters.',
    },
    {
      label: 'Email Address',
      name: 'email',
      type: 'email',
      required: true,
      pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
      errorMessage: 'Please enter a valid email',
    },
    {
      label: 'Which role are you applying for?',
      name: 'position',
      type: 'select',
      required: true,
      options: [
        'Frontend developer',
        'Backend developer',
        'UX Designer',
        'Quality Assurance',
      ],
    },
    {
      label: 'Skills',
      name: 'skills',
      type: 'checkbox-group',
      options: [],
    },
    {
      label: 'Portfolio URL',
      name: 'portfolio',
      type: 'text',
      requiredIf: {
        position: ['Frontend developer', 'UX Designer'],
      },
    },
    {
      label: 'Motivational Letter',
      name: 'motivation',
      type: 'textarea',
      required: true,
      minLength: 20,
      maxLength: 200,
    },
    {
      label: 'Prefer to work from home?',
      name: 'homeOfficePreferences',
      type: 'radio',
      options: ['Yes', 'No', 'No preferences'],
    },
  ],
};
