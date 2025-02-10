import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config";
interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  enquiry: string;
}

const ContactGetData: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/contact`)
      .then((response) => response.json())
      .then((data) => {
        // Remove duplicates by email (only keep the first occurrence)
        const uniqueContacts = data.filter(
          (contact: Contact, index: number, self: Contact[]) =>
            self.findIndex((c) => c.email === contact.email) === index
        );
        setContacts(uniqueContacts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto p-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-6 text-white-800">
        Contact Data
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-4 text-left">First Name</th>
              <th className="p-4 text-left">Last Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Telephone</th>
              <th className="p-4 text-left">Enquiry</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <tr
                  key={contact._id}
                  className={`text-gray-700 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-100 transition duration-200`}
                >
                  <td className="p-4 border">{contact.firstName}</td>
                  <td className="p-4 border">{contact.lastName}</td>
                  <td className="p-4 border">{contact.email}</td>
                  <td className="p-4 border">{contact.telephone}</td>
                  <td className="p-4 border">{contact.enquiry}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-6 text-center text-white">
                  No contact data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactGetData;
