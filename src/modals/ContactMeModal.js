import './ContactMeModal.css'
import React, { useState, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import emailjs from 'emailjs-com';
import { RiMailAddLine } from "react-icons/ri"
import ContactMeContent from "./../assets/textContent/ContactMeContent"
import ContactFormContent from "./../assets/textContent/ContactFormContent"

export default function ContactMe() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <ModalLayout isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
            <footer className="fixed inset-x-0 bottom-0 flex justify-end">
                <button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className="rounded-full border-2 border-pink-400 bg-offwhite p-2 m-3"
                >
                    <RiMailAddLine color="#F472B6" size="1.75em" />
                </button>
            </footer>
        </>
    )
}

export function ModalLayout({ isOpen, setIsOpen }) {
    return (
        <Transition.Root show={isOpen}>
            <Dialog
                as="div"
                className="fixed inset-0 z-0 flex overflow-y-auto m-5"
                open={isOpen}
                onClose={setIsOpen}
            >
                <Transition.Child
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <Transition.Child
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div className="bg-gray-800 text-left rounded-lg shadow-xl transform transition-all">
                        <ModalContent isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                </Transition.Child>
            </Dialog >
        </Transition.Root >
    );
}


export function ModalContent({ isOpen, setIsOpen }) {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hgfpu2g', 'alana_ruth_default', form.current, 'user_jGP5QPWHRFUs9OTp4x8qY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="md:grid md:grid-cols-3 md:gap-4">
            <div className="md:col-span-1 md:pl-4 md:pr-0 md:py-5 px-4 py-5">
                <ContactMeContent />
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2 border-double border-gray-700 md:border-l-4 md:border-t-0 border-t-4">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="shadow overflow-hidden">
                        <div className="block font-medium text-xs text-offwhite px-4 py-5 sm:p-6">
                            {formFields}
                        </div>
                        <div className="px-4 py-3 bg-gray-700 text-right sm:px-6 rounded-t-none rounded-b-lg">
                            <button
                                type="button"
                                className="inline-flex justify-center py-2 px-4 mr-3 text-sm font-medium text-gray-400 hover:text-pink-600"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                I'll Contact Later
                            </button>
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-pink-400 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

const formFields = ContactFormContent.map(field => {
    const className = "mt-1 mb-3 p-1 focus:ring-pink-400 focus:border-pink-400 bg-gray-700 block w-full shadow-xs rounded-md"
    return (
        <div key={field.id}>
            <label>
                {field.label}
            </label>
            {field.isTextArea ?
                <textarea
                    name={field.id}
                    id={field.id}
                    className={className}
                    rows="5"
                    required
                />
                :
                <input
                    type="text"
                    name={field.id}
                    id={field.id}
                    autoComplete={field.autoComplete}
                    className={className}
                    required
                />
            }
        </div>
    )
})