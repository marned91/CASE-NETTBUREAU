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
