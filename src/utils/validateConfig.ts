import type { FormConfig, FieldType } from '../types/formTypes';

const validTypes: FieldType[] = [
  'text',
  'email',
  'checkbox',
  'textarea',
  'select',
  'radio',
  'checkbox-group',
];

/**
 * Validates the form configuration to ensure all required fields and types are correct.
 *
 * @param config - The JSON config to validate.
 * @returns An array of error messages, or an empty array if valid.
 */
export function validateConfig(config: FormConfig): string[] {
  const errors: string[] = [];

  if (!config.title || typeof config.title !== 'string') {
    errors.push('Skjemaet mangler tittel eller har feil type.');
  }

  config.fields.forEach((field, index) => {
    if (!field.label || typeof field.label !== 'string') {
      errors.push(`Felt ${index + 1} mangler label eller har feil type.`);
    }

    if (!field.name || typeof field.name !== 'string') {
      errors.push(`Felt ${index + 1} mangler name eller har feil type.`);
    }

    if (
      !field.type ||
      typeof field.type !== 'string' ||
      !validTypes.includes(field.type as FieldType)
    ) {
      errors.push(`Felt ${index + 1} har ugyldig eller manglende type.`);
    }

    if (
      field.options &&
      (!Array.isArray(field.options) ||
        !field.options.every((opt) => typeof opt === 'string'))
    ) {
      errors.push(`Felt ${index + 1} har ugyldig options-type.`);
    }

    if (field.requiredIf && typeof field.requiredIf !== 'object') {
      errors.push(`Felt ${index + 1} har ugyldig requiredIf-verdi.`);
    }
  });

  return errors;
}
