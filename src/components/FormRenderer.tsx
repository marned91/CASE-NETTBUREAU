import React, { useState } from 'react';
import type { FormField, FormConfig } from '../types/formTypes';
import { positionSkills } from '../config/positionSkills';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { FormSelect } from './FormSelect';
import { FormCheckboxGroup } from './FormCheckboxGroup';
import { FormRadio } from './FormRadio';

type Props = {
  config: FormConfig;
};

export function FormRenderer({ config }: Props) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  function handleChange(
    event: React.ChangeEvent<
      HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const filteredConfig = {
    ...config,
    fields: config.fields
      .map((field) => {
        if (field.name === 'skills' && formData['position']) {
          const position = formData['position'];
          const options = positionSkills[position] || field.options || [];
          return { ...field, options };
        }
        return field;
      })
      .filter((field) => {
        if (field.name === 'skills' && !formData['position']) return false;
        return true;
      }),
  };

  return (
    <form className="bg-white p-10 rounded-xl shadow-md max-w-xl mx-auto space-y-6">
      <h1 className="font-large text-3xl font-bold text-center pb-5">
        {config.title}
      </h1>

      {filteredConfig.fields.map((field: FormField) => {
        return (
          <div key={field.name} className="space-y-2">
            <label className="block font-normal text-sm">
              {field.label}
              {field.required && ' *'}
            </label>

            {field.type === 'text' || field.type === 'email' ? (
              <FormInput field={field} />
            ) : field.type === 'textarea' ? (
              <FormTextarea
                field={field}
                value={formData[field.name] || ''}
                onChange={handleChange}
              />
            ) : field.type === 'select' ? (
              <FormSelect
                field={field}
                value={formData[field.name] || ''}
                onChange={handleChange}
              />
            ) : field.type === 'checkbox-group' ? (
              <FormCheckboxGroup field={field} />
            ) : field.type === 'radio' ? (
              <FormRadio field={field} />
            ) : null}
          </div>
        );
      })}
      <button
        type="submit"
        className="bg-dark font-button text-white font-medium px-4 py-2 mt-5 rounded hover:bg-black hover:shadow-md cursor-pointer transition"
      >
        Submit Application
      </button>
    </form>
  );
}
