import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideCreateDialog } from './actions';

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

    render() {
        const contact = this.getContactDetail();
        return (
            <section className={`overlay ${this.props.type} ${this.props.visibility}`}>
                <article>
                    <h1 className="create">Create new contact</h1>
                    <h1 className="edit">Edit contact</h1>
                    <span className="close" onClick={this.props.hide}>×</span>
                    <form>
                        <label htmlFor="">Name</label>
                        <input type="text" defaultValue={contact.first_name} />

                        <label htmlFor="">Email</label>
                        <input type="text" defaultValue={contact.email} />

                        <label htmlFor="">Mobile phone</label>
                        <input type="text" defaultValue={contact.phone_number} />
                        <button type="submit">Save contact</button>
                    </form>
                </article>
            </section >
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
        hide: hideCreateDialog
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dialog);
