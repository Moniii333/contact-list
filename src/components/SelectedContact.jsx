
import { useState, useEffect } from 'react'

export default function SelectedContact ({ personId, setPersonId }) {
  const [contact, setContact] = useState(null)

  useEffect(() => {
    async function getDetails (id) {
      
      try {
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${id}`)
      if(!response.ok){
        throw new Error('Network response not okay...')
      }
      const result = await response.json()
      console.log('Individual details: ', result)

      setContact(result)
      }
      catch (err) {
        console.log('Error fetching details... ', err)
      }
      
    } 
    
      getDetails(personId)
 
  }, [])
  const goBack = () => {
    setPersonId(null)
  }
  return (
    <>
    {contact && (
      <>
        <h2>{contact.name}</h2>
        <div>Phone number: {contact.phone}</div>
        <div>Address: {contact.address.street}, {contact.address.city} {contact.address.zipcode}</div>
        <div>Website: {contact.website}</div>
        <div>Company: {contact.company.name}</div>
        <div>Catchphrase: {contact.company.catchPhrase}</div>
        <button onClick={goBack}>Go Back</button>
      </>
    )}
  </>
);
}
