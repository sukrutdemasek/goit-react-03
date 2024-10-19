import Contact from "../Contact/Contact";
import "./ContactList.css";
export default function ContactList({ contacts, deleteFunction }) {
  const contactList = contacts.map((contact) => (
    <li key={contact.id} className="listElement">
      <Contact
        name={contact.name}
        number={contact.number}
        id={contact.id}
        deleteFunction={deleteFunction}
      />
    </li>
  ));

  return <ul className="contactsList">{contactList}</ul>;
}
