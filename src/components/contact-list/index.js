import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectContact } from './actions';
import { fetchContacts } from '../../redux/contact-actions';
import ContactList from './component';

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
