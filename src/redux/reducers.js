import { combineReducers  } from 'redux';
import DialogReducer from '../components/dialog/reducers';
import ContactReducer from '../components/contact-list/reducers';

export default combineReducers({
    DialogReducer,
    ContactReducer
});
