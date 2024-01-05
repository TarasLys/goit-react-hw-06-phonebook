import css from './Filter.module.css';
import { useSelector } from 'react-redux';
import React, { useEffect, useMemo } from 'react';

export const Filter = ({ value, onChange, onFilteredContactsChange }) => {
  const contacts = useSelector(state => state.postDetails.contacts);

  const filteredContacts = useMemo(() => 
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    ), [contacts, value]);

  useEffect(() => {
    onFilteredContactsChange(filteredContacts);
  }, [filteredContacts, onFilteredContactsChange]);

  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <div className={css.general}>
      <label htmlFor="">Find contacts by name</label>
      <input
        className={css.allInput}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Пошук контактів за ім'ям"
      />
    </div>
  );
};


