import React from 'react';

type Props = {
  errors: string[];
};

/**
 * Displays a user-friendly error message if the form config is invalid.
 *
 * @param errors - An array of error messages generated from config validation.
 */
export function ConfigErrorFallback({ errors }: Props) {
  return (
    <div className="max-w-xl px-6 mx-auto mt-10 bg-red-50 text-red-800 px-6 py-5 rounded-lg shadow-md space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xl">🚫</span>
        <h2 className="font-semibold text-lg">
          Oops! Skjemaet kunne ikke lastes inn.
        </h2>
      </div>

      <p className="text-sm leading-relaxed">
        Det oppstod en feil med skjemaoppsettet. Prøv å laste siden på nytt,
        eller kontakt support hvis problemet vedvarer.
      </p>

      <ul className="list-disc list-inside text-sm text-red-700">
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  );
}
