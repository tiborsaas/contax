import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideCreateDialog } from './actions';

class Dialog extends Component {

    getContactDetail(prop) {
        const index = this.props.selected;
        const contact = this.props.contacts[index];
        if (!contact || this.props.type === 'create') {
            return '';
        }
        return contact[prop];
    }

    render() {
        return (
            <section className={`overlay ${this.props.type} ${this.props.visibility}`}>
                <article>
                    <h1 className="create">Create new contact</h1>
                    <h1 className="edit">Edit contact</h1>
                    <span className="close" onClick={this.props.hide}>×</span>
                    <form>
                        <label htmlFor="">Name</label>
                        <input type="text" defaultValue={this.getContactDetail('first_name')} />

                        <label htmlFor="">Email</label>
                        <input type="text" defaultValue={this.getContactDetail('email')} />

                        <label htmlFor="">Mobile phone</label>
                        <input type="text" defaultValue={this.getContactDetail('phone_number')} />
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
