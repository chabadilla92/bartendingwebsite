import React from 'react'
import PageHeader from '../components/PageHeader'

const header = {
  title: "send us an email!",
  subheader: "we'd love to hear from you"
}
const Contact = () => {
  return (
    <PageHeader header={header} />
  )
}

export default Contact