import { positionSkills } from '../config/positionSkills';
import type { FormConfig } from '../types/formTypes';

/**
 * Returns a new config object with updated fields based on form data.
 *
 * This is mainly used to dynamically filter or update field options —
 * for example, showing different skill options depending on the selected position.
 *
 * - If the field is named 'skills' and a position is selected,
 *   it updates the options using the `positionSkills` config.
 * - If no position is selected yet, the 'skills' field is removed from the config.
 *
 * @param config - The original form config object.
 * @param formData - The current user input (form state).
 * @returns A modified form config with filtered or updated fields.
 */

export function getFilteredConfig(
  config: FormConfig,
  formData: Record<string, any>
): FormConfig {
  return {
    ...config,
    fields: config.fields
      .map((field) => {
        if (field.name === 'skills' && formData['position']) {
          const position = formData['position'];
          const options = positionSkills[position] || field.options || [];
          return { ...field, options };
        }
        return field;
      })
      .filter((field) => {
        if (field.name === 'skills' && !formData['position']) return false;
        return true;
      }),
  };
}
