import React from 'react';
import type { FormField } from '../types/formTypes';

type Props = {
  field: FormField;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
};

export function FormTextarea({ field, value, onChange, error }: Props) {
  const maxLength = field.maxLength ?? 200;
  return (
    <div className="space-y-2">
      <textarea
        name={field.name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className="w-full px-3 py-2 border border-gray-300 rounded"
        placeholder="Why do you want to work with us?"
      />
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
      <div className="text-sm text-gray-500 text-right">
        {value.length}/{maxLength} characters
      </div>
    </div>
  );
}
