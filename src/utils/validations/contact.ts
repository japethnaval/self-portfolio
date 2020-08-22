import * as Yup from 'yup'

const emailRegex = /\S+@\S+\.\S+/

export const validationSchema = Yup.object().shape({
  message: Yup.string().required('REQUIRED_FIELD'),
  emailAddress: Yup.string()
    .matches(emailRegex, 'USER_CREATION_MODAL_EMAIL_ERROR')
    .required('REQUIRED_FIELD'),
})
