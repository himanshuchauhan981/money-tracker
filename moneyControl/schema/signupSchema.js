import * as Yup from 'yup';

let schema = Yup.object({
  name: Yup.string().required('Name is required'),
  mobile_number: Yup.string()
    .matches(/^[89][0-9]{9}/, 'Invalid mobile number')
    .required('Mobile number is required'),
  email: Yup.string()
    .email('Invalid Email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Minimum password length should be 6')
    .required('Password is required'),
  confirm_password: Yup.string().required('Confirm password is required'),
});

export default schema;
