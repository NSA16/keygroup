import React from "react";

function ContactForm () {
    return (
        <div className="w-50 contactform mx-auto">
            <div>
                <h3 className="contactFormHeader">Do you have questions? Don't hesitate to contact us!</h3>
            </div>
            <div>
                <h4>This is an h4 I have not though of.</h4>
            </div>
            <div>
                <input className="form-control" type="text" placeholder="Name"></input>
            </div>
            <div>
                <input className="form-control" type="text" placeholder="Email Address" required></input>
            </div>
            <div>
                <input className="form-control" type="text" placeholder="Phone Number"></input>
            </div>
            <div>
                <textarea className="form-control" placeholder="Put your questions here"></textarea>
            </div>
            <div>
                <button className="rounded bg-black text-white">Submit</button>
            </div>
        </div>

    );
}

export default ContactForm;