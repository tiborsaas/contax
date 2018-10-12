import React, { Component } from 'react';
import ContactList from '../contact-list';
import ContactDetails from '../contact-details';
import Search from '../search';

class Layout extends Component {
    render() {
        return (
            <main>
                <article className="contact-list">
                    <Search />
                    <ContactList />
                </article>
                <ContactDetails />
            </main>
        );
    }
}

export default Layout;
