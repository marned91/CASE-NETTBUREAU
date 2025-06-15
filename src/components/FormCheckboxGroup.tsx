import React from 'react';
import type { FormField } from '../types/formTypes';

type Props = {
  field: FormField;
  values: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FormCheckboxGroup({ field, values, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      {field.options?.map((option) => (
        <label key={option} className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name={field.name}
            value={option}
            checked={values.includes(option)}
            onChange={onChange}
            className="h-4 w-4"
          />
          {option}
        </label>
      ))}
    </div>
  );
}
