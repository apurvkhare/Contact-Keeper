import React, { Fragment, useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    console.log("I am here");
  }, []);

  return (
    <Fragment>
      <div className='grid-2'>
        <div>
          <ContactForm />
        </div>
        <div>
          <ContactFilter />
          <Contacts />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
