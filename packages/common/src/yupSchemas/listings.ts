import * as yup from "yup";

const positiveInteger = yup
  .number()
  .required()
  .positive()
  .integer();

export const validListingSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup
    .string()
    .min(3)
    .required(),
  category: yup.string(),
  price: positiveInteger,
  beds: positiveInteger,
  guests: positiveInteger,
  lat: yup.number(),
  long: yup.number(),
  amenities: yup.array()
});
