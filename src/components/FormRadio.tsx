import React from 'react';
import type { FormField } from '../types/formTypes';

type Props = {
  field: FormField;
};

export function FormRadio({ field }: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      {field.options?.map((option) => (
        <label key={option} className="flex items-center gap-1 text-sm">
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
  );
}
