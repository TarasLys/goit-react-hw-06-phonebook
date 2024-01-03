import { nanoid } from 'nanoid';
import { ContactForm } from './Forms/ContactForm';
import { Filter } from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import {
  setContacts,
  setContactsRemove,
  setFilter,
} from './redux/postDetailReducer';

export const App = () => {
  const filter = useSelector(state => state.postDetails.filter);
  const contacts = useSelector(state => state.postDetails.contacts);
  const dispatch = useDispatch();

  const createContacts = data => {
    const newContacts = {
      id: nanoid(),
      ...data,
    };

    const isDuplicated = contacts.find(el => el.name === data.name);

    if (isDuplicated) return alert(`${data.name} is already in contact.`);
    dispatch(setContacts(newContacts));
  };

  const deleteContacts = id => {
    dispatch(setContactsRemove(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
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
        <ContactForm createContacts={createContacts} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactsList
          deleteContacts={deleteContacts}
          contacts={filteredContacts}
        />
      </div>
    </>
  );
};
