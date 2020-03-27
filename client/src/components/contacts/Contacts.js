import React, { Fragment, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import { Spinner } from "../layout/Spinner";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please Add a Contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered
            ? filtered.map(contact => (
                <ContactItem contact={contact} key={contact._id} />
              ))
            : contacts.map(contact => (
                <CSSTransition
                  classNames='item'
                  timeout={500}
                  key={contact._id}
                l>
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
