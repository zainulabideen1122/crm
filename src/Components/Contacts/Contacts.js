import React, { useState } from "react";
import "./Contacts.css";
import { RiFileExcel2Fill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { MdEdit, MdDelete } from "react-icons/md";

function Contacts() {
  let contactsList = [
    {
      id: 1,
      name: "Tirmidhi",
      phone: "+921234567890",
      dateSaved: "2/2/2023",
    },
    {
      id: 2,
      name: "Nurul",
      phone: "+921234567890",
      dateSaved: "2/2/2023",
    },
    {
      id: 3,
      name: "Syed",
      phone: "+921234567890",
      dateSaved: "2/2/2023",
    },
  ];

  let [contacts, setContacts] = useState(contactsList);

  return (
    <>
      <div className="contactContainer">
        <div className="contactHeader" style={{ overflowX: "auto" }}>
          <div className="headerTitle" style={{ overflowX: "auto" }}>
            <h5>Contacts</h5>
            <p>234 contacts saved</p>
          </div>
          <div className="headerActions" style={{ overflowX: "auto" }}>
            <div className="excelContainer">
              <RiFileExcel2Fill size={20} />
              <p>Export to Excel</p>
            </div>
            <div className="searchBar">
              <AiOutlineSearch style={{ color: "#a5b1c2" }} />
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>

        <div className="innerContainer" style={{ overflowX: "auto" }}>
          <div className="contactContents">
            <div className="contactHeader" style={{ overflowX: "auto" }}>
              <ul style={{ fontWeight: "bolder" }}>
                <li>ID</li>
                <li>Name</li>
                <li>Phone</li>
                <li>Data Saved</li>
                <li className="actions">ACTION</li>
              </ul>
            </div>
            <div className="contactBody" style={{ overflowX: "auto" }}>
              {contacts.map((contact) => {
                return (
                  <>
                    <ul>
                      <li>{contact.id}</li>
                      <li>{contact.name}</li>
                      <li>{contact.phone}</li>
                      <li>{contact.dateSaved}</li>
                      <li className="actionBtns">
                        <span>
                          <MdEdit size={20} />
                        </span>
                        <span>
                          <MdDelete
                            size={20}
                            style={{ color: "#c0392b", marginLeft: "10px" }}
                          />
                        </span>
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
