import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideCreateDialog } from './actions';

class Dialog extends Component {

    render() {
        return (
            <section className={'overlay create ' + this.props.visibility}>
                <article>
                    <h1 className="create">Create new contact</h1>
                    <h1 className="edit">Edit contact</h1>
                    <span className="close" onClick={this.props.hide}>×</span>
                    <form>
                        <label htmlFor="">Name</label>
                        <input type="text" />

                        <label htmlFor="">Email</label>
                        <input type="text" />

                        <label htmlFor="">Mobile phone</label>
                        <input type="text" />
                        <button type="submit">Save contact</button>
                    </form>
                </article>
            </section >
        );
    }
}

const mapStateToProps = state => ({
    type: state.DialogReducer.dialogType,
    visibility: state.DialogReducer.visibility
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
