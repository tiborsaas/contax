import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showCreateDialog } from './actions';

class Header extends Component {

    render() {
        return (
            <header>
                <article>
                    <h1>Contax</h1>
                    <button className="create-contact" onClick={this.props.showDialog}>Add new contact</button>
                </article>
            </header>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    showDialog: () => dispatch(showCreateDialog())
});

export default connect(
    null, mapDispatchToProps
)(Header);
