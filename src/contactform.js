import React from "react";

function ContactForm () {
    return (
        <div className="w-50 contactform mx-auto">
            <div>
                <h3>Do you have questions? Don't hesitate to contact us!</h3>
            </div>
            <div>
                <h4></h4>
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
                <input className="form-control" type="textarea" placeholder="Put your questions here"></input>
            </div>
            <div>
                <button className="rounded bg-black text-white">Submit</button>
            </div>
        </div>

    );
}

export default ContactForm;