import React, { useEffect, useState } from "react";
import axios from "axios";

interface Email {
  _id: string;
  email: string;
  createdAt: string;
}

const EmailTable: React.FC = () => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/email/get-emails");
        setEmails(response.data);
      } catch (error) {
        console.error("Error fetching emails:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  return (
    <div className="container mx-auto sm:p-8">
      <h2 className="text-[28px] md:text-[34px] font-bold mb-4 text-center py-8">Stored Emails</h2>
      {loading ? (
        <p className="text-center">Loading emails...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow-md">
            <thead>
              <tr className="bg-[#5794f9] text-white">
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Submitted At</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {emails.length > 0 ? (
                emails.map((email) => (
                  <tr key={email._id} className="border-t">
                    <td className="py-2 px-4 text-center">{email.email}</td>
                    <td className="py-2 px-4 text-center">{new Date(email.createdAt).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="py-2 px-4 text-center">
                    No emails found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmailTable;
