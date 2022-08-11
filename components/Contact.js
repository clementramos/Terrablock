import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

export default function Contact () {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (firstname.length <= 0) {
      tempErrors["firstname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (lastname.length <= 0) {
      tempErrors["lastname"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          firstname: firstname,
          subject: subject,
          lastname: lastname,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFirstName("");
        setEmail("");
        setLastName("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFirstName("");
      setEmail("");
      setLastName("");
      setSubject("");
    }
    console.log(firstname, email, subject, lastname);
  };

    return (
      <><div className="flex flex-row justify-center items-start bg-black overflow-hidden bg-hero bg-no-repeat w-screen h-screen pt-24 xs:pt-48 xs:inline-block xs:bg-hero xs:w-full z-9999">
        {/* Text container */}
        <div className="w-3/4 md:text-center lg:pt-20 xs:w-full xs:p-5">
          <h1 className="cursor-none text-6xl font-bold text-white hover:text-emerald-400 pb-14 xs:pb-7">Contact us</h1>
          <h4 className="cursor-none text-4xl font-bold text-white pt-4 hover:text-emerald-400 pb-28 xs:pb-7">Want to know more about the project or ask a question to the team?<br></br> Fill the form below!</h4>
          <a href="#contact">
            <button className="rounded-full bg-emerald-400 text-white text-lg font-bold py-2 px-12 cursor-none mx-12 hover:bg-white hover:text-emerald-400 xs:px-6 xs:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="flex grid grid-cols-2 justify-center items-start bg-sparkles w-screen h-sreen" id="contact">
        <div className="flex flex-row justify-center pt-40">
          <Image alt="logo" src="/nft4.png" width="300px" height="300px"></Image>
        </div>
      <div  className="flex items-center justify-center pt-24 w-full">
      <form className="w-1/2 pb-48" onSubmit={handleSubmit}>
        <label htmlFor="firstname" className="block pt-12"></label>
        <input type="text" value={firstname} onChange={(e) => {setFirstName(e.target.value);}} name="firstname" placeholder="First Name" required className="w-full caret-emerald-400 rounded-lg border py-3 px-6 font-medium text-black outline-none focus:border-emerald-400" />{errors?.firstname && (
            <p className="text-red-500">First Name cannot be empty.</p>
          )} <br></br>
        <label htmlFor="lastname"  className="block pt-12"></label>
        <input type="text" value={lastname} onChange={(e) => {setLastName(e.target.value);}} name="lastname" placeholder="Last Name" required className="w-full caret-emerald-400 rounded-lg border py-3 px-6 font-medium text-black outline-none focus:border-emerald-400" />{errors?.firstname && (
            <p className="text-red-500">Last Name cannot be empty.</p>
          )}
        <label htmlFor="email"  className="block pt-12"></label>
        <input type="email" value={email} onChange={(e) => {setEmail(e.target.value);}} name="email" placeholder="E-mail" required className="w-full caret-emerald-400 rounded-lg border py-3 px-6 font-medium text-black outline-none focus:border-emerald-400" />{errors?.firstname && (
            <p className="text-red-500">Email cannot be empty.</p>
          )}
        <label htmlFor="subject"  className="block pt-12"></label>
        <textarea type="text" value={subject} onChange={(e) => {setSubject(e.target.value);}} name="subject" placeholder="Your questions" required className="resize-none w-full caret-emerald-400 rounded-lg border py-3 px-6 font-medium text-black outline-none focus:border-emerald-400">{errors?.firstname && (
            <p className="text-red-500">Subject cannot be empty.</p>
          )}</textarea>
        <label htmlFor="submit" className="block pt-12"></label>
        <input type="submit" name="submit" placeholder="Submit" className="w-full caret-emerald-400 rounded-lg border bg-contact py-3 px-6 font-medium text-black outline-none focus:border-emerald-400" /> {buttonText} 
      </form>
      </div>
      </div>
      <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div></>
 )
}
