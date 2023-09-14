import ContactList from './ContactList'
import SelectedContact from './SelectedContact'

// responsible for rendering a single row
export default function ContactRow({ setSelectedContactId, contact }) {

  return(
    <tr onClick={() => setSelectedContactId(contact.id)}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  )
}