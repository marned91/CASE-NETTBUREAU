import React from 'react';
import type { FormField, FormConfig } from '../types/formTypes';

type Props = {
  config: FormConfig;
};

export function FormRenderer({ config }: Props) {
  return (
    <form>
      <h1>{config.title}</h1>
      {config.fields.map((field: FormField) => {
        return (
          <div key={field.name}>
            <label>
              {field.label}
              {field.required && ' *'}
            </label>

            {field.type === 'text' || field.type === 'email' ? (
              <input type={field.type} name={field.name} />
            ) : field.type === 'textarea' ? (
              <textarea name={field.name} />
            ) : field.type === 'select' ? (
              <select name={field.name}>
                <option value="">-- Select --</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === 'checkbox' ? (
              <input type="checkbox" name={field.name} />
            ) : null}
          </div>
        );
      })}
    </form>
  );
}
