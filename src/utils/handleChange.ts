/**
 * Updates form data state when an input changes.
 *
 * Handles different input types:
 * - Text, email, select, textarea: sets the value directly.
 * - Checkbox (single or group): adds/removes value in an array.
 *
 * @param event - The change event from an input, select, or textarea element.
 * @param setFormData - React state setter function to update form data.
 */

export function handleChange(
  event: React.ChangeEvent<
    HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
  >,
  setFormData: React.Dispatch<React.SetStateAction<Record<string, any>>>
) {
  const target = event.target;
  const { name, value, type } = target;

  if (type === 'checkbox' && target instanceof HTMLInputElement) {
    const checked = target.checked;

    setFormData((prev) => {
      const prevValues = prev[name] || [];

      if (checked) {
        return { ...prev, [name]: [...prevValues, value] };
      } else {
        return {
          ...prev,
          [name]: prevValues.filter((item: string) => item !== value),
        };
      }
    });
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
}
