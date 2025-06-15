import type { FormField } from '../types/formTypes';

/**
 * Validates form input based on the provided field configuration and current form data.
 *
 * Checks for:
 * - Required fields (including conditionally required ones)
 * - Regex pattern matching
 * - Min and max length constraints
 *
 * @param fields - Array of form field definitions from the config.
 * @param formData - The user's input as a key-value object.
 * @returns An object where each key is a field name and the value is an error message (if any).
 */

export function validateForm(
  fields: FormField[],
  formData: Record<string, any>
): Record<string, string> {
  const errors: Record<string, string> = {};

  fields.forEach((field) => {
    const value = formData[field.name];

    if (field.required && (!value || value === '')) {
      if (
        field.required &&
        (value === undefined ||
          value === '' ||
          (Array.isArray(value) && value.length === 0))
      ) {
        errors[field.name] = 'Feltet er obligatorisk';
        return;
      }
    }

    if (field.requiredIf) {
      const dependentField = Object.keys(field.requiredIf)[0];
      const requiredValues = field.requiredIf[dependentField];
      if (
        requiredValues.includes(formData[dependentField]) &&
        (!value || value === '')
      ) {
        errors[field.name] = 'Feltet er obligatorisk';
        return;
      }
    }

    if (field.pattern && value) {
      const regex = new RegExp(field.pattern);
      if (!regex.test(value)) {
        errors[field.name] = field.errorMessage || 'Ugyldig verdi';
        return;
      }
    }

    if (field.minLength && value.length < field.minLength) {
      errors[
        field.name
      ] = `${field.label} må være minst ${field.minLength} tegn`;
      return;
    }

    if (field.maxLength && value.length > field.maxLength) {
      errors[
        field.name
      ] = `${field.label} Kan ikke være mer enn ${field.maxLength} tegn`;
      return;
    }
  });

  return errors;
}
