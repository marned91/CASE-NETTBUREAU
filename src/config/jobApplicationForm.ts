import type { FormConfig } from '../types/formTypes';

export const jobApplicationForm: FormConfig = {
  title: 'Jobbsøknadsskjema',
  fields: [
    {
      label: 'Fullt navn',
      name: 'fullName',
      type: 'text',
      required: true,
      minLength: 3,
    },
    {
      label: 'E-postadresse',
      name: 'email',
      type: 'email',
      required: true,
      pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
    },
    {
      label: 'Hvilken stilling søker du?',
      name: 'position',
      type: 'select',
      required: true,
      options: [
        'Frontend-utvikler',
        'Backend-utvikler',
        'UX-designer',
        'Kvalitetssikring (QA)',
      ],
    },
    {
      label: 'Ferdigheter',
      name: 'skills',
      type: 'checkbox-group',
      options: [],
    },
    {
      label: 'Portfolio URL',
      name: 'portfolio',
      type: 'text',
      requiredIf: {
        position: ['Frontend-utvikler', 'UX-designer'],
      },
    },
    {
      label: 'Motivasjonstekst',
      name: 'motivation',
      type: 'textarea',
      required: true,
      minLength: 20,
      maxLength: 200,
    },
    {
      label: 'Foretrekker du hjemmekontor?',
      name: 'homeOfficePreferences',
      type: 'radio',
      options: ['Ja', 'Nei', 'Ingen preferanser'],
    },
  ],
};
