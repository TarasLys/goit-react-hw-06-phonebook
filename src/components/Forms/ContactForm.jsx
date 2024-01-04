import { useState } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export const ContactForm = ({ onNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.postDetails.contacts);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isDuplicated = contacts.find(el => el.name === newContact.name);
    if (isDuplicated) return alert(`${newContact.name} is already in contact.`);

    onNewContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.general}>
        <label htmlFor="">Name</label>
        <input
          className={css.allInput}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Введи ім'я для пошуку"
          required
        />
        <label htmlFor="">Number</label>
        <input
          className={css.allInput}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Введи номер телефону"
          required
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
        <ul>
          <li></li>
        </ul>
      </div>
    </form>
  );
};

// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import css from './ContactForm.module.css';

// export const ContactForm = ({ onNewContact }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChange = event => {
//     const { name, value } = event.target;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };

// const isDuplicated = contacts.find(el => el.name === newContact.name);
//     if (isDuplicated) return alert(`${newContact.name} is already in contact.`);

//     onNewContact(newContact);
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className={css.general}>
//         <label htmlFor="">Name</label>
//         <input
//           className={css.allInput}
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChange}
//           placeholder="Введи ім'я для пошуку"
//           required
//         />
//         <label htmlFor="">Number</label>
//         <input
//           className={css.allInput}
//           type="tel"
//           name="number"
//           value={number}
//           onChange={handleChange}
//           placeholder="Введи номер телефону"
//           required
//         />
//         <button className={css.btn} type="submit">
//           Add contact
//         </button>
//         <ul>
//           <li></li>
//         </ul>
//       </div>
//     </form>
//   );
// };

// import { useState } from 'react';
// import css from './ContactForm.module.css';

// export const ContactForm = ({ createContacts }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChange = event => {
//     const { name, value } = event.target;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     createContacts({ name, number });
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className={css.general}>
//         <label htmlFor="">Name</label>
//         <input
//           className={css.allInput}
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChange}
//           placeholder="Введи ім'я для пошуку"
//           required
//         />
//         <label htmlFor="">Number</label>
//         <input
//           className={css.allInput}
//           type="tel"
//           name="number"
//           value={number}
//           onChange={handleChange}
//           placeholder="Введи номер телефону"
//           required
//         />
//         <button className={css.btn} type="submit">
//           Add contact
//         </button>
//         <ul>
//           <li></li>
//         </ul>
//       </div>
//     </form>
//   );
// };
