import { useState } from 'react'

const useForm = (validate) => {
  const [values, setValues] = useState({
    accountName: '',
    address: '',
    city: '',
    companyName: '',
    description: '',
    email: '',
    emailOptOut: '',
    fax: '',
    firstName: '',
    lastName: '',
    nameTitle: '',
    phone: '',
    state: '',
    title: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setErrors(validate(values))
  }

  return {
    errors,
    handleChange,
    handleSubmit,
    values
  }
}

export default useForm
