import { FormField } from '../types/formTypes';

export function isFieldConditionallyRequired(
  field: FormField,
  formData: Record<string, any>
): boolean {
  if (!field.requiredIf) return false;

  const dependentField = Object.keys(field.requiredIf)[0];

  const requiredValues = field.requiredIf[dependentField];

  const currentValue = formData[dependentField];

  return requiredValues.includes(currentValue);
}
