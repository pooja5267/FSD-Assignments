import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/contacts");
      setContacts(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) return <div className="admin-loading">Loading contacts...</div>;
  if (error) return <div className="admin-error">Error: {error}</div>;

  return (
    <div className="admin-container">
      <h1>Contact Messages</h1>
      <p className="admin-subtitle">View and manage contact form submissions</p>

      {contacts.length === 0 ? (
        <div className="no-contacts">
          <i className="fas fa-inbox"></i>
          <p>No contact messages yet</p>
        </div>
      ) : (
        <div className="contacts-grid">
          {contacts.map((contact) => (
            <div key={contact._id} className="contact-card">
              <div className="contact-header">
                <div className="contact-info">
                  <h3>{contact.name}</h3>
                  <p className="contact-email">{contact.email}</p>
                </div>
                <div className="contact-date">
                  {formatDate(contact.createdAt)}
                </div>
              </div>
              <div className="contact-message">
                {contact.message}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;