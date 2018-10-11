import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchContacts, selectContact } from './actions';

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.props.fetchContacts();
    }

    isActive(key) {
        return key === this.props.selected ? 'active' : '';
    }

    render() {
        return (
            <ul>
                {this.props.contacts.map((contact, key) =>
                    <li key={key} onClick={this.props.selectContact.bind(this, key)} className={this.isActive(key)}>
                        {contact.first_name} {contact.last_name}
                    </li>
                )}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    contacts: state.ContactReducer.contacts,
    selected: state.ContactReducer.selected
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
