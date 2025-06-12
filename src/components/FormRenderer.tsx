import React, { useState } from 'react';
import type { FormField, FormConfig } from '../types/formTypes';
import { positionSkills } from '../config/positionSkills';

type Props = {
  config: FormConfig;
};

export function FormRenderer({ config }: Props) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;

    if (name === 'position') {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  const filteredConfig = {
    ...config,
    fields: config.fields.map((field) => {
      if (field.name === 'skills' && formData['position']) {
        const position = formData['position'];
        const options = positionSkills[position] || field.options || [];
        return { ...field, options };
      }
      return field;
    }),
  };

  return (
    <form className="bg-white p-10 rounded-xl shadow-md max-w-xl mx-auto space-y-6">
      <h1 className="font-large text-3xl font-bold text-center pb-5">
        {config.title}
      </h1>

      {filteredConfig.fields.map((field: FormField) => {
        return (
          <div key={field.name} className="space-y-1">
            <label className="block font-normal text-sm">
              {field.label}
              {field.required && ' *'}
            </label>

            {field.type === 'text' || field.type === 'email' ? (
              <input
                type={field.type}
                name={field.name}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            ) : field.type === 'textarea' ? (
              <textarea
                name={field.name}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Why do you want to work here?"
              />
            ) : field.type === 'select' ? (
              <select
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded cursor-pointer"
              >
                <option value="">-- Select --</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === 'checkbox-group' ? (
              <div className="flex flex-wrap gap-4">
                {field.options?.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      name={field.name}
                      value={option}
                      className="h-4 w-4"
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : field.type === 'radio' ? (
              <div className="flex flex-wrap gap-4">
                {field.options?.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-1 text-sm"
                  >
                    <input
                      type="radio"
                      name={field.name}
                      value={option}
                      className="h-4 w-4"
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
      <button
        type="submit"
        className="bg-dark font-button text-white font-medium px-4 py-2 rounded hover:bg-black hover:shadow-md cursor-pointer transition"
      >
        Submit Application
      </button>
    </form>
  );
}
