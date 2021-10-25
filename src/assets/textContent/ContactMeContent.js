import React from "react";

export default function ContactMeContent() {
    return (
        <>
            <h3 className="text-xl font-bold leading-6 text-green-300 mb-3">CONTACT ME</h3>
            <div className="mt-1 text-xs text-blue-200 break-words">
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
        </>
    )
}