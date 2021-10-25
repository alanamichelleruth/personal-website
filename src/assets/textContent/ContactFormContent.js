import React from "react";

const ContactFormContent = [
    {
        label: "Name:",
        type: "text",
        id: "name",
        autoComplete: "given-name"
    },
    {
        label: "Email address:",
        type: "email-address",
        id: "email-address",
        autoComplete: "email"
    },
    {
        label: "Subject:",
        type: "text",
        id: "subject",
        autoComplete: "off"
    },
    {
        label: "Message:",
        id: "message",
        isTextArea: true
    },
];

export default ContactFormContent;