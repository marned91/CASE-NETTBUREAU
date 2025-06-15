import { positionSkills } from '../config/positionSkills';
import type { FormConfig } from '../types/formTypes';

/**
 * Returns a filtered version of the form configuration.
 *
 * Dynamically injects options into the "skills" field based on the selected position,
 * and removes the "skills" or "portfolio" field entirely if it's not relevant based
 * on the current form data.
 *
 * @param config - The full form configuration object.
 * @param formData - The current user input as a key-value map.
 * @returns A new FormConfig with conditionally modified or filtered fields.
 */

export function getFilteredConfig(
  config: FormConfig,
  formData: Record<string, any>
): FormConfig {
  const visibleFields = config.fields.filter((field) => {
    if (field.name === 'skills' && !formData['position']) {
      return false;
    }

    if (field.requiredIf) {
      const dependentField = Object.keys(field.requiredIf)[0];
      const requiredValues = field.requiredIf[dependentField];
      const currentValue = formData[dependentField];
      return requiredValues.includes(currentValue);
    }

    return true;
  });

  const adjustedFields = visibleFields.map((field) => {
    if (field.name === 'skills' && formData['position']) {
      const position = formData['position'];
      const options = positionSkills[position] || field.options || [];
      return { ...field, options };
    }

    return field;
  });

  return {
    ...config,
    fields: adjustedFields,
  };
}
