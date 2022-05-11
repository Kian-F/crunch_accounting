import React from 'react'
import validate from '../functions/ValidateInputs'
import useForm from '../hooks/useForm'
import states from './models/states'

const ContactForm = () => {
  const { errors, handleChange, handleSubmit, values } = useForm(validate)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Contact Information</h3>
        <label>First Name</label>
        <select name="nameTitle" onChange={handleChange} value={values.firstName}>
          <option value="">None</option>
          <option value="mrs">Mrs</option>
          <option value="mr">Mr</option>
          <option value="ms">Ms</option>
        </select>
        <input
          name="firstName"
          onChange={handleChange}
          placeholder="John"
          type="text"
          value={values.firstName}
          required
        />

        {errors.firstName && <p>{errors.firstName}</p>}

        <label>Last Name</label>
        <input name="lastName" onChange={handleChange} placeholder="Smith" type="text" value={values.lastName} />

        {errors.lastName && <p>{errors.lastName}</p>}

        <label>Account Name</label>
        <input
          name="accountName"
          onChange={handleChange}
          placeholder="John's Joinery"
          type="text"
          value={values.accountName}
        />

        {errors.firstName && <p>{errors.firstName}</p>}

        <label>Company Name (optional)</label>
        <input name="companyName" onChange={handleChange} type="text" value={values.companyName} />

        <label>Phone</label>
        <input name="phone" onChange={handleChange} placeholder="02 123 456 78" type="tel" value={values.phone} />

        {errors.phone && <p>{errors.phone}</p>}

        <label>Fax (optional)</label>
        <input name="fax" onChange={handleChange} placeholder="John's Joinery" type="tel" value={values.fax} />

        <label>Title (optional)</label>
        <input name="title" onChange={handleChange} placeholder="Owner" type="text" value={values.title} />

        <label>Email</label>
        <input name="email" onChange={handleChange} placeholder="sample@email.com" type="email" value={values.email} />

        {errors.email && <p>{errors.email}</p>}

        <label>Email Opt Out</label>
        <input type="checkbox" name="emailOptOut" onChange={handleChange} value={!values.emailOptOut} />

        <h3>Address Information</h3>

        <label>Street No & Street</label>
        <input
          type="text"
          name="address"
          onChange={handleChange}
          placeholder="1, Elizabeth Street"
          value={values.street}
        />

        <label>City</label>
        <input type="text" name="city" onChange={handleChange} placeholder="Sydney" value={values.city} />

        <label>State</label>
        <select name="state" onChange={handleChange} value={values.state}>
          {states.map((state) => (
            <option value={state.value}>{state.label}</option>
          ))}
        </select>

        <h3>Description Information</h3>
        <label>Description</label>
        <textarea name="description" onChange={handleChange} value={values.description} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default ContactForm
