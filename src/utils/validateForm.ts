import type { FormField } from '../types/formTypes';

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
        errors[field.name] = `${field.label} is required`;
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
        errors[field.name] = `${field.label} is required`;
        return;
      }
    }

    if (field.pattern && value) {
      const regex = new RegExp(field.pattern);
      if (!regex.test(value)) {
        errors[field.name] = field.errorMessage || `${field.label} is invalid`;
        return;
      }
    }

    if (field.minLength && value.length < field.minLength) {
      errors[
        field.name
      ] = `${field.label} must be at least ${field.minLength} characters`;
      return;
    }

    if (field.maxLength && value.length > field.maxLength) {
      errors[
        field.name
      ] = `${field.label} must be less than ${field.maxLength} characters`;
      return;
    }
  });

  return errors;
}
