import React from 'react';
import type { FormField } from '../types/formTypes';

type Props = {
  field: FormField;
};

export function FormInput({ field }: Props) {
  return (
    <input
      type={field.type}
      name={field.name}
      className="w-full px-3 py-2 border border-gray-300 rounded"
    />
  );
}
