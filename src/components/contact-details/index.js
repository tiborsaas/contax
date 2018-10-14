import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showEditDialog } from './actions';
import { search } from '../search/actions';

class ContactDetails extends Component {

    getContactDetail(prop) {
        const id = this.props.selected;
        const contact = this.props.contacts.reduce((acc, contact) => {
            if(contact.id === id) {
                acc = contact;
            }
            return acc;
        }, {});

        return contact[prop] ? contact[prop] : '';
    }

    render() {
        return (
            <aside className="contact-details">
                <h1>{`${this.getContactDetail('first_name')} ${this.getContactDetail('last_name')}`}</h1>
                <p><span>Email:</span><a href={'mailto:' + this.getContactDetail('email')}>{this.getContactDetail('email')}</a></p>
                <p><span>Mobile:</span><a href={'tel:' + this.getContactDetail('phone_number')}>{this.getContactDetail('phone_number')}</a></p>
                <p><span>Date created:</span>{this.getContactDetail('date_created')}</p>
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
