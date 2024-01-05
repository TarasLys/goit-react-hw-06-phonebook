import { Filter } from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { ContactForm } from '../Forms/ContactForm';
import {
  setContacts,
  setContactsRemove,
  setFilter,
} from '../../redux/postDetailReducer';

export const PostDetailsPage = () => {
  const filter = useSelector(state => state.postDetails.filter);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const dispatch = useDispatch();

  const handleNewContact = newContact => {
    dispatch(setContacts(newContact));
  };

  const deleteContacts = id => {
    dispatch(setContactsRemove(id));
  };

  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onNewContact={handleNewContact} />
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={handleFilterChange}
          onFilteredContactsChange={setFilteredContacts}
        />
        <ContactsList
          deleteContacts={deleteContacts}
          contacts={filteredContacts}
        />
      </div>
    </>
  );
};