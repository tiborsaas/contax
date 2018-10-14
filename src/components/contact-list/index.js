import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectContact } from './actions';
import { fetchContacts } from '../../redux/contact-actions';

class ContactList extends Component {
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
            return fullname.indexOf(search_term.toLocaleLowerCase()) !== -1
        });
    }

    render() {
        return (
            <ul>
                {this.filterResults(this.props.contacts, this.props.search_term).map((contact, key) =>
                    <li key={key} onClick={this.props.selectContact.bind(this, contact.id)} className={this.isActive(contact.id)}>
                        {contact.first_name} {contact.last_name}
                    </li>
                )}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    contacts: state.ContactReducer.contacts,
    selected: state.ContactReducer.selected,
    search_term: state.ContactReducer.search_term,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchContacts,
        selectContact
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList);
