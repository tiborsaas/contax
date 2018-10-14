import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showEditDialog, hideDetailsViewOnMobile } from './actions';
import { deleteContact } from '../../redux/contact-actions';
import { search } from '../search/actions';
import ContactDetails from './component';

const mapStateToProps = state => ({
    contacts: state.ContactReducer.contacts,
    selected: state.ContactReducer.selected
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        showEditDialog,
        search,
        deleteContact,
        hideDetailsViewOnMobile
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactDetails);
