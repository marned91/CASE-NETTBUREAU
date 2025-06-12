export type FieldType =
  | 'text'
  | 'email'
  | 'checkbox'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox-group';

export type RequiredIf = {
  [fieldName: string]: string[];
};

export type FormField = {
  label: string;
  name: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  errorMessage?: string;
  requiredIf?: RequiredIf;
};

export type FormConfig = {
  title: string;
  fields: FormField[];
};
