import React from "react"
import { useDispatch } from 'react-redux';// Import useHistory hook
import { addContact } from './redux/ContactSlice'; // Import the addContact action
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";


export default function ContactForm(props){

    const dispatch = useDispatch(); // Get dispatch function // Get history object
    const navigate = useNavigate();
    const [formDetails, setFormDetails] = React.useState({
        name : "", 
        mail : "", 
        status : "Active"
    })
    function handleChange(event){
        const {name, value} = event.target; 

        setFormDetails(prevFormDetails =>{
            return(
                {
                    ...prevFormDetails,
                    [name] : value
                }
            )
        })

    }
    function handleSubmit(event){
        event.preventDefault();
        dispatch(addContact(formDetails));
        navigate('/');
    // Redirect to a different route (if needed)
    }

    return(
        <main>
        <Header />
        <form className="contact-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="name" name="name" onChange={handleChange} value={formDetails.name} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="email" name="mail" onChange={handleChange} value={formDetails.mail} required/>
      </div>
      <div className="mb-3">
        <label className="form-label">Status</label>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="male"
            name="status"
            value="Active"
            checked = {formDetails.status == "Active"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="male">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="female"
            name="status"
            value="Not Active"
            checked = {formDetails.status == "Not Active"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="female">
            Not Active
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary submit-btn">
        Create Contact
      </button>
    </form>
    </main>
    )
}