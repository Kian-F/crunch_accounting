import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form>
        <h3>Contact Information</h3>
        <label>First Name</label>
        <select>
          <option value="">None</option>
          <option value="mrs">Mrs</option>
          <option value="mr">Mr</option>
          <option value="ms">Ms</option>
        </select>
        <input type="text" name="firstName" placeholder="John" />

        <label>Last Name</label>
        <input type="text" name="lastName" placeholder="Smith" />

        <label>Account Name</label>
        <input type="text" name="accountName" placeholder="John's Joinery" />

        <label>Company Name (optional)</label>
        <input type="text" name="companyName" />

        <label>Phone</label>
        <input type="tel" name="phone" placeholder="02 123 456 78" />

        <label>Fax (optional)</label>
        <input type="tel" name="fax" placeholder="John's Joinery" />

        <label>Title (optional)</label>
        <input type="text" name="title" placeholder="Owner" />

        <label>Email</label>
        <input type="email" name="email" placeholder="sample@email.com" />

        <label>Email Opt Out</label>
        <input type="checkbox" name="emailOptOut" />

        <h3>Address Information</h3>

        <label>Street No & Street</label>
        <input type="text" name="address" placeholder="1, Elizabeth Street" />

        <label>City</label>
        <input type="text" name="city" placeholder="Sydney" />

        <label>State</label>
        <select>
          <option value="nsw">New South Wales</option>
          <option value="victoria">Victoria</option>
          <option value="queensland">Queensland</option>
          <option value="westernAustralia">Western Australia</option>
          <option value="southAustralia">South Australia</option>
          <option value="tasmania">Tasmania</option>
        </select>

        <h3>Description Information</h3>
        <label>Description</label>
        <textarea rows="4" cols="50" />
      </form>
    </div>
  )
}

export default ContactForm
