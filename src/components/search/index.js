import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from './actions';

class Search extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Search by name or number" onChange={(event) => this.props.search(event.target.value)} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        search
    }, dispatch)
};

export default connect(
    null, mapDispatchToProps
)(Search);
