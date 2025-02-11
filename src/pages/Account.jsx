import React from "react";
import Header from "../components/Header";
import Account_sidebar from "../components/Account/Account_sidebar";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
export default function Account() {
  const [emails, setEmails] = useState([
    { email: "example@gmail.com", role: "USER" },
  ]);

  const removeEmail = (email) => {
    setEmails(emails.filter((e) => e.email !== email));
  };
  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-light">
        <Account_sidebar />
        <main className="flex-1 p-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">ACCOUNT</h2>
            <div className="space-y-4">
              <div className="flex justify-between  pb-2">
                <div className="flex flex-col">
                  <span className="font-bold">Full Name</span>
                  <span className="mr-4">Chukwuchebem David</span>
                </div>
                <div className="flex items-center">
                  <span className="text-themeBlue font-semibold">Edit</span>
                </div>
              </div>
              <div className="flex justify-between  pb-2">
                <div className="flex flex-col">
                  <span className="font-bold">Email Address</span>
                  <span className="mr-4">davididominic767@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-themeBlue font-semibold">Edit</span>
                </div>
              </div>
              <div className="flex justify-between  pb-2">
                <div className="flex flex-col">
                  <span className="font-bold">Password</span>
                  <span className="mr-4">*********</span>
                </div>
                <div className="flex items-center">
                  <span className="text-themeBlue font-semibold">Edit</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="font-bold">Registered On</span>
                  <span className="mr-4">10:04 PM UTC - 04 May 2024</span>
                </div>
                <div className="flex items-center">
                  <button className="text-red-500 hover:underline">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mt-6">LINKED EMAILS</h2>
              <button className="text-themeBlue font-semibold mt-4 hover:underline">
                + Add Email
              </button>
            </div>
            <div className="space-y-3 mt-4">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="font-bold">davididominic767@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-themeBlue font-bold">STAFF</span>
                </div>
              </div>
              {emails.map(({ email, role }) => (
                <div key={email} className="flex justify-between  pb-2">
                  <span>{email}</span>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => removeEmail(email)}
                      className="text-themeBlue font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
