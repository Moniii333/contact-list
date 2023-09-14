import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

    
 
return (
    <>
      {selectedContactId ? (
        <SelectedContact personId={selectedContactId} setPersonId={setSelectedContactId}>Selected Contact View</SelectedContact>
      ) : (
        <ContactList setPersonId={setSelectedContactId} />
      )}
    </>
  );
}
export default App
