import * as yup from 'yup';

export const videoValidationSchema = yup.object().shape({
  file_path: yup.string().required(),
  status: yup.string().required(),
  text_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
