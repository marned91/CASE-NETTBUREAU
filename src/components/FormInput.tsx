import React from 'react';
import type { FormField } from '../types/formTypes';

type Props = {
  field: FormField;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FormInput({ field, value, onChange }: Props) {
  return (
    <input
      type={field.type}
      name={field.name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded"
    />
  );
}
