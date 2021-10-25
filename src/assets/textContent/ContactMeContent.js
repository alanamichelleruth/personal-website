import React from "react";

export default function ContactMeContent() {
    return (
        <div className="md:col-span-1">
            <h3 className="px-4 pt-6 mt-3 mb-3 text-4xl font-galada leading-6 text-pink-400">CONTACT ME</h3>
            <div className="border-double border-gray-700 border-b-4" />
            <div className="mt-1 text-xs text-blue-200 break-words md:py-5 px-4 py-3">
                <p>
                    Like what you see? Don't be shy, contact me!
                    <br />
                    <br />
                    If you prefer to email me directly, my email is <a href="mailto:alanamichelleruth@gmail.com" className="break-all">alanamichelleruth@gmail.com</a>.
                    <br />
                    <br />
                    If your style is more <i>sliding into the DMs,</i> my linkedIn is <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alana-ruth-55085a116">@Alana Ruth</a>.
                    <br />
                    <br />
                    If you want current pictures of my foster dogs or to just plain ol' chat on the phone, my number is <a href="tel:+19144200508">+1 (914) 420-0508</a>.
                </p>
            </div>
        </div>
    )
}