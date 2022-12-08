import React from 'react'
import Jumbotron from '../components/Jumbotron'
import PageHeader from '../components/PageHeader'

const header = {
  title: "plan your next event",
  subheader: null
}

const BookNow = () => {
  return (
    <div>
      <Jumbotron />
      <PageHeader header={header} />
    </div>
  )
}

export default BookNow