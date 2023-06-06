import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul >
      {contacts.map(contact => (
        <li className="List_item" key={contact.id}>
          <span>
            {contact.name}: <span className="List_span">{contact.number}</span>
          </span>
          <button
            onClick={() => deleteContact(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};