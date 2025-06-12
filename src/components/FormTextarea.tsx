import React from 'react';
import type { FormField } from '../types/formTypes';

type Props = {
  field: FormField;
};

export function FormTextarea({ field }: Props) {
  return (
    <textarea
      name={field.name}
      className="w-full px-3 py-2 border border-gray-300 rounded"
      placeholder="Why do you want to work here?"
    />
  );
}
