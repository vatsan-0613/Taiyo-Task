import { Link } from "react-router-dom"


export default function NoContacts({addContact}){
    return(
        <div className="d-flex justify-content-center align-items-center no-contacts flex-column">
            <h1>No contacts found</h1>
            <Link to="/create">
            <button className="create-one btn btn-primary">create Contact</button>
      </Link>
        </div>
        
    )
}