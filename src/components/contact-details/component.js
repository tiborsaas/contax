import React, { Component } from 'react';

export default class ContactDetails extends Component {

    getContactDetail() {
        const id = this.props.selected;
        const contact = this.props.contacts.reduce((acc, contact) => {
            if(contact.id === id) {
                acc = contact;
            }
            return acc;
        }, false);
        return contact;
    }

    removeContact(e) {
        e.preventDefault();
        const contact = this.getContactDetail();
        if(window.confirm(`Are you sure you want to delete ${contact.first_name} ${contact.last_name}?`)) {
            this.props.deleteContact(contact);
        }
    }

    formatDate(isoDateString) {
        const zeroPad = number => {
            const numAsString = number.toString();
            return number < 10 ? `0${numAsString}` : numAsString;
        }

        const time = new Date(isoDateString);
        const year = time.getFullYear();
        const month = zeroPad(time.getMonth() + 1);
        const day = zeroPad(time.getDate());
        const hour = zeroPad(time.getUTCHours());
        const minutes = zeroPad(time.getMinutes());
        return `${year}-${month}-${day} ${hour}:${minutes}`;
    }

    render() {
        const contact = this.getContactDetail();
        const date = new Date(contact.date_created);

        if(!contact) {
            return (
                <aside className="contact-details">
                    <h1>Please select a contact</h1>
                </aside>
            );
        }
        return (
            <aside className="contact-details show">
                <h1>{`${contact.first_name} ${contact.last_name}`}</h1>
                <p><span>Email:</span><a href={'mailto:' + contact.email}>{contact.email}</a></p>
                <p><span>Mobile:</span><a href={'tel:' + contact.phone_number}>{contact.phone_number}</a></p>
                <p><span>Date created:</span>{this.formatDate(date)}</p>
                <a href="/" className="danger delete-contact" onClick={this.removeContact.bind(this)}>remove contact</a>
                <button className="edit-contact" onClick={this.props.showEditDialog}>Edit</button>
                <span className="close" onClick={this.props.hideDetailsViewOnMobile}>×</span>
            </aside>
        );
    }
}