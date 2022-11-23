import * as Yup from 'yup'

const schema = Yup.object({
  email: Yup.string().email().required('Enter your email'),
  password: Yup.string().min(5).required('Enter your password'),
})
export default schema
