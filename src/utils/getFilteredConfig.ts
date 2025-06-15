import { positionSkills } from '../config/positionSkills';
import type { FormConfig } from '../types/formTypes';

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
