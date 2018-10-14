import React, { Component } from 'react';

export default class Dialog extends Component {

    getContactDetail() {
        const id = this.props.selected;
        const contact = this.props.contacts.reduce((acc, contact) => {
            if (contact.id === id) {
                acc = contact;
            }
            return acc;
        }, false);
        return this.props.type === 'create' ? false : contact;
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const contact = this.getContactDetail();

        const payload = {
            first_name: data.get('first_name'),
            last_name: data.get('last_name'),
            email: data.get('email'),
            phone_number: data.get('phone_number'),
            date_created: contact.date_created
        };

        if(this.props.type === 'create') {
            payload.date_created = new Date().toISOString();
            this.props.createContact(payload);
        } else {
            this.props.updateContact(this.props.selected, payload);
        }
        e.target.reset();
    }

    render() {
        const contact = this.getContactDetail();

        const heading = this.props.type === 'create' ? 'Create new contact' : 'Edit contact';
        return (
            <section className={`overlay ${this.props.type} ${this.props.visibility}`}>
                <article>
                    <h1>{heading}</h1>
                    <span className="close" onClick={this.props.hide}>×</span>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>Frist name</label>
                        <input type="text" name="first_name" defaultValue={contact.first_name} required />

                        <label>Last name</label>
                        <input type="text" name="last_name" defaultValue={contact.last_name} required />

                        <label>Email</label>
                        <input type="email" name="email" defaultValue={contact.email} required />

                        <label>Mobile phone</label>
                        <input type="text" name="phone_number" defaultValue={contact.phone_number} required />
                        <button type="submit">Save contact</button>
                    </form>
                </article>
            </section>
        );
    }
}
