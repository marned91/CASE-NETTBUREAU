import React from 'react';
import type { FormField, FormConfig } from '../types/formTypes';

type Props = {
  config: FormConfig;
};

export function FormRenderer({ config }: Props) {
  return (
    <form className="bg-white p-10 rounded-xl shadow-md max-w-xl mx-auto space-y-6">
      <h1 className="font-large text-3xl font-bold text-center pb-5">
        {config.title}
      </h1>

      {config.fields.map((field: FormField) => {
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
                className="w-full px-3 py-2 border border-gray-300 rounded cursor-pointer"
              >
                <option value="">-- Select --</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === 'checkbox' ? (
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={field.name}
                  className="h-4 w-4 cursor-pointer"
                />
                <span className="text-sm">{field.label}</span>
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
