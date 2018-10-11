import React, { Component } from 'react';

class ContactDetails extends Component {
    render() {
        return (
            <aside class="contact-details">
                <h1>Arlina Eby</h1>
                <p><span>Email:</span><a href="mailto:arlina@gmail.com">arlina@gmail.com</a></p>
                <p><span>Mobile:</span><a href="tel:+86 (535) 778-8058">+86 (535) 778-8058</a></p>
                <p><span>Date created:</span>2018-01-14</p>
                <a href class="danger delete-contact">remove contact</a>
                <button class="edit-contact">Edit</button>
            </aside>
        );
    }
}

export default ContactDetails;
