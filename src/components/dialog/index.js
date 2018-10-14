import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideCreateDialog } from './actions';
import { updateContact, createContact } from '../../redux/contact-actions';

class Dialog extends Component {

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
        const contact = {
            first_name: data.get('first_name'),
            last_name: data.get('last_name'),
            email: data.get('email'),
            phone_number: data.get('phone_number')
        };

        if(this.props.type === 'create') {
            contact.date_created = new Date().toISOString();
            this.props.createContact(contact);
        } else {
            this.props.updateContact(this.props.selected, contact);
        }
        e.target.reset();
    }

    render() {
        const contact = this.getContactDetail();
        return (
            <section className={`overlay ${this.props.type} ${this.props.visibility}`}>
                <article>
                    <h1 className="create">Create new contact</h1>
                    <h1 className="edit">Edit contact</h1>
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

const mapStateToProps = state => ({
    type: state.DialogReducer.dialogType,
    visibility: state.DialogReducer.visibility,
    selected: state.ContactReducer.selected,
    contacts: state.ContactReducer.contacts,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        hide: hideCreateDialog,
        createContact,
        updateContact
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dialog);
