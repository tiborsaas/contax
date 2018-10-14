import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showEditDialog } from './actions';
import { search } from '../search/actions';

class ContactDetails extends Component {

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

    render() {
        const contact = this.getContactDetail();
        if(!contact) {
            return (
                <aside className="contact-details">
                    <h1>Please select a contact</h1>
                </aside>
            );
        }
        return (
            <aside className="contact-details">
                <h1>{`${contact.first_name} ${contact.last_name}`}</h1>
                <p><span>Email:</span><a href={'mailto:' + contact.email}>{contact.email}</a></p>
                <p><span>Mobile:</span><a href={'tel:' + contact.phone_number}>{contact.phone_number}</a></p>
                <p><span>Date created:</span>{contact.date_created}</p>
                <a href="/" className="danger delete-contact">remove contact</a>
                <button className="edit-contact" onClick={this.props.showEditDialog}>Edit</button>
            </aside>
        );
    }
}

const mapStateToProps = state => ({
    contacts: state.ContactReducer.contacts,
    selected: state.ContactReducer.selected
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        showEditDialog,
        search
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactDetails);
