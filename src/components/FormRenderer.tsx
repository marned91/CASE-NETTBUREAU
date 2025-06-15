import React, { useState } from 'react';
import type { FormField, FormConfig } from '../types/formTypes';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { FormSelect } from './FormSelect';
import { FormCheckboxGroup } from './FormCheckboxGroup';
import { FormRadio } from './FormRadio';
import { validateForm } from '../utils/validateForm';
import { handleChange } from '../utils/handleChange';
import { getFilteredConfig } from '../utils/getFilteredConfig';

type Props = {
  config: FormConfig;
};

export function FormRenderer({ config }: Props) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredConfig = getFilteredConfig(config, formData);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errors = validateForm(filteredConfig.fields, formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('✅ Submitted form data:', formData);
      setFormSubmitted(true);
      setFormData({});
    } else {
      setFormSubmitted(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 rounded-xl shadow-md max-w-xl mx-auto space-y-6"
    >
      <h1 className="font-large text-3xl font-bold text-center pb-5">
        {config.title}
      </h1>

      {formSubmitted && (
        <p className="text-green-600 text-center text-sm">
          ✅ Form submitted successfully!
        </p>
      )}

      {filteredConfig.fields.map((field: FormField) => (
        <div key={field.name} className="space-y-2">
          <label className="block font-normal text-sm">
            {field.label}
            {field.required && ' *'}
          </label>

          {field.type === 'text' || field.type === 'email' ? (
            <FormInput
              field={field}
              value={formData[field.name] || ''}
              onChange={(event) => handleChange(event, setFormData)}
            />
          ) : field.type === 'textarea' ? (
            <FormTextarea
              field={field}
              value={formData[field.name] || ''}
              onChange={(event) => handleChange(event, setFormData)}
              error={formErrors[field.name]}
            />
          ) : field.type === 'select' ? (
            <FormSelect
              field={field}
              value={formData[field.name] || ''}
              onChange={(event) => handleChange(event, setFormData)}
            />
          ) : field.type === 'checkbox-group' ? (
            <FormCheckboxGroup
              field={field}
              values={formData[field.name] || []}
              onChange={(event) => handleChange(event, setFormData)}
            />
          ) : field.type === 'radio' ? (
            <FormRadio
              field={field}
              value={formData[field.name] || ''}
              onChange={(event) => handleChange(event, setFormData)}
            />
          ) : null}

          {field.type !== 'textarea' && formErrors[field.name] && (
            <p className="text-sm text-red-600">{formErrors[field.name]}</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="bg-dark font-button text-white font-medium px-4 py-2 mt-5 rounded hover:bg-black hover:shadow-md cursor-pointer transition"
      >
        Submit Application
      </button>
    </form>
  );
}
