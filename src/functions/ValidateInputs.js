export default function validateInfo(values) {
  const errors = {}

  const emailFormat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  let phonePattern =
    /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/

  if (!values.firstName.trim()) {
    errors.firstName = 'First Name required'
  }

  if (!values.lastName.trim()) {
    errors.lastName = 'Last Name required'
  }

  if (!values.email) {
    errors.email = 'Email required'
  } else if (!emailFormat.test(values.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!values.phone) {
    errors.phone = 'Phone required'
  } else if (!phonePattern.test(values.phone)) {
    errors.phone = 'Please enter a valid phone or mobile number'
  }

  return errors
}
