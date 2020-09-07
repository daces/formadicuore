import React from "react"

export default function ContactForm (){
    return (
        <section>
        <form method="post" action="https://getform.io/{your-unique-getform-endpoint}">
        <h1 className="gallery-grid__title ">contattaci</h1>
        <div className="contact_main">
            <label>
                Name:
                <input className="dblock form " type="text" name="name" />
            </label>
            <label>
                Email:
                <input className="dblock form " type="email" name="email" />
            </label>
            <label>
                Message:
                <textarea className="dblock form form-textarea" type="text" name="message" />
            </label>
            <div className="contact_main_button">
                <input className="submit-btn" type="submit" value="Submit"></input>
            </div>
        </div>
        </form>
        </section>
    )

}