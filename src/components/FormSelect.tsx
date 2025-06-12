import React from 'react';
import type { FormField } from '../types/formTypes';

type Props = {
  field: FormField;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function FormSelect({ field, value, onChange }: Props) {
  return (
    <select
      name={field.name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded cursor-pointer"
    >
      <option value="">-- Select --</option>
      {field.options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
