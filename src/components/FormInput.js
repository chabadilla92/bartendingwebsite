import React from 'react'
import { Form } from 'semantic-ui-react'

const FormExampleForm = ({ label }) => (
  <Form className='carousel-item'>
    <Form.Field>
      <label>{label}</label>
      <input placeholder='First Name' />
    </Form.Field>
  </Form>
)

export default FormExampleForm