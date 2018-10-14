import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideCreateDialog } from './actions';
import { updateContact, createContact } from '../../redux/contact-actions';
import Dialog from './component';

const mapStateToProps = state => ({
    type: state.DialogReducer.dialogType,
    visibility: state.DialogReducer.visibility,
    selected: state.ContactReducer.selected,
    contacts: state.ContactReducer.contacts,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        hide: hideCreateDialog,
        createContact,
        updateContact
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dialog);
