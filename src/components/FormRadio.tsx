import React from 'react';
import type { FormField } from '../types/formTypes';

type Props = {
  field: FormField;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FormRadio({ field, value, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      {field.options?.map((option) => (
        <label key={option} className="flex items-center gap-1 text-sm">
          <input
            type="radio"
            name={field.name}
            value={option}
            checked={value === option}
            onChange={onChange}
            className="h-4 w-4"
          />
          {option}
        </label>
      ))}
    </div>
  );
}
