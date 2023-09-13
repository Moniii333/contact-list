import React from 'react'
import ContactList from './ContactList'

// responsible for rendering a single row
export default function ContactRow({ contact }) {

  return(
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  )
}