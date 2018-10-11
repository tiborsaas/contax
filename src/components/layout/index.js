import React, { Component } from 'react';

import ContactList from '../contact-list';
import ContactDetails from '../contact-details';

class Layout extends Component {
    render() {
        return (
            <main>
                <article class="contact-list">
                    <input type="text" placeholder="Search by name or number" />
                    <ContactList />
                </article>
                <ContactDetails />
            </main>
        );
    }
}

export default Layout;
