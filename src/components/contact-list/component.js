import React, { Component } from 'react';

export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.props.fetchContacts();
    }

    isActive(id) {
        return id === this.props.selected ? 'active' : '';
    }

    filterResults(contacts, search_term) {
        return contacts.filter(contact => {
            const fullname = (contact.first_name + ' ' + contact.last_name).toLocaleLowerCase();
            return (fullname.indexOf(search_term.toLocaleLowerCase()) !== -1 || contact.phone_number.indexOf(search_term) !== -1);
        });
    }

    sortResults(contacts) {
        const algo = (A, B) => {
            if (A.first_name + A.last_name < B.first_name + B.last_name) return -1;
            if (A.first_name + A.last_name > B.first_name + B.last_name) return 1;
            return 0;
        }
        return contacts.sort(algo);
    }

    render() {
        const contacts = this.props.contacts;
        return (
            <ul>
                {this.filterResults(this.sortResults(contacts), this.props.search_term).map((contact, key) =>
                    <li key={key} onClick={this.props.selectContact.bind(this, contact.id)} className={this.isActive(contact.id)}>
                        {contact.first_name} {contact.last_name}
                    </li>
                )}
            </ul>
        );
    }
}