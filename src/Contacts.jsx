import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { deleteContact } from "./redux/ContactSlice";

export default function Contacts() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  function handleId(index) {
    dispatch(deleteContact(index));
  }
  function handleEdit(index) {
    console.log("edit button clicked");
  }

  const cards = contacts.map((contact, index) => {
    return (
      <div className="card me-3 flex-shrink-0 mb-3" style={{ width: "16rem" }}>
        <div className="card-header d-flex justify-content-between align-items-center">
          <div>
            <p>contact {index + 1}</p>{" "}
          </div>
          <div>
            <FontAwesomeIcon  className="icon trash-icon" icon={faTrash} onClick={() => handleId(index)} />
            <Link to={`/edit/${index}`}><FontAwesomeIcon className="icon edit-icon ms-3"
              icon={faPenToSquare}
              onClick={() => handleEdit(index)}
            /></Link>
            
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{contact.name}</li>
          <li className="list-group-item">{contact.mail}</li>
          <li className="list-group-item">{contact.status}</li>
        </ul>
      </div>
    );
  });
  return (
    <div className="text-center">
      <Link to="/create">
        <button className="create-one btn btn-primary mt-5 mb-3">
          create New Contact
        </button>
      </Link>
      <div className="contact-display d-flex flex-wrap justify-content-center">
        {cards}
      </div>
    </div>
  );
}
