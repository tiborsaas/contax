import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchContacts } from './actions';

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.props.fetchContacts();
    }
    render() {
        return (
            <ul>
                {this.props.contacts.map((contact, key) =>
                    <li key={key}>
                        {contact.first_name} {contact.last_name}
                    </li>
                )}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    contacts: state.ContactReducer.contacts,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchContacts
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList);
