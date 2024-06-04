import * as Yup from "yup";

// Adjusted validation schema
export const ValidationSchema = Yup.object().shape({
  type_id: Yup.number().required(),
  type: Yup.string().required(),
  name: Yup.string().when("type_id", {
    is: (value: number) => value === 1,
    then: (schema) => schema.required("Name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  full_name: Yup.string().when("type_id", {
    is: (value: number) => value === 2,
    then: (schema) => schema.required("Full name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
});
