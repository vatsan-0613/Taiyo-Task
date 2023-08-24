
import NoContacts from "./NoContacts";
import Contacts from "./Contacts";
import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Header from "./Header";

export default function App() {
  const contacts = useSelector(state => state.contacts); // Access contacts state from Redux store

  console.log(contacts);

  return (
    <div>
    <Header />
    <div className="container-fluid main">
            {contacts.length==0 ? <NoContacts/> : <Contacts/>}
    </div>
    </div>
)
}