import React from 'react'
import { Form } from 'semantic-ui-react'

const EventDetailsForm = ({ label }) => {
  return (
    <Form className='carousel-item'>
    <Form.Field width={8}>
      <label>{label}</label>
      <input placeholder='First Name' />
    </Form.Field>
  </Form>
  )
}

export default EventDetailsForm