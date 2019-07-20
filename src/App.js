import React, { useState } from 'react'
import Input from './Input';
import Contact from './Contact';
import Button from './Button';

function App() {
    let [personPhoto, setPhoto] = useState('')
    let [personName, setName] = useState('')
    let [showAdd, setShowAdd] = useState(false)
    let [search, setSearch] = useState('')
    let [contacts, setContacts] = useState([
        {
            photo: 'https://randomuser.me/api/portraits/women/44.jpg',
            name: 'June Cha'
        }
    ])

    function add() {
        setContacts([...contacts, {
            photo: personPhoto,
            name: personName
        }])

        setShowAdd(false)
        setPhoto('')
        setName('')
    }

    return <>
        <h1>Contacts</h1>
        <Input placeholder='Search people' value={search} onChange={(event) => { setSearch(event.target.value) }} />
        <a className='plus' href='#' onClick={() => { setShowAdd(true) }}>+</a>

        {showAdd && <div className='add-form'>
            <Input placeholder='Photo link' value={personPhoto} onChange={(event) => { setPhoto(event.target.value) }} />
            <Input placeholder='Name' value={personName} onChange={(event) => { setName(event.target.value) }} />
            <Button content='Add' onClick={() => { add() }} />
            <Button theme='silver' content='Cancel' onClick={() => { setShowAdd(false) }} />
        </div>}

        <ul>
            {contacts.filter(item => item.name.indexOf(search) > -1).map((contact, index) => <Contact key={index} photo={contact.photo} name={contact.name} />)}
        </ul>
    </>
}

export default App