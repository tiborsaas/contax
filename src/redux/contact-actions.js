
import { hideCreateDialog } from '../components/dialog/actions';

const completeAction = (type, payload) => ({
    type,
    payload
});


const config = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: null
};


export function updateContact(id, contact) {
    config.method = 'PUT';
    config.body = JSON.stringify(contact);

    return dispatch => {
        return fetch(`http://localhost:9000/contacts/${id}`, config)
            .then(response => response.json())
            .then(json => {
                dispatch(fetchContacts());
                dispatch(hideCreateDialog());
            });
    }
}


export function createContact(contact) {
    config.method = 'POST';
    config.body = JSON.stringify(contact);

    return dispatch => {
        return fetch('http://localhost:9000/contacts', config)
            .then(response => response.json())
            .then(json => {
                dispatch(fetchContacts());
                dispatch(hideCreateDialog());
            });
    }
}


export function deleteContact(contact) {
    config.method = 'DELETE';
    return dispatch => {
        return fetch(`http://localhost:9000/contacts/${contact.id}`, config)
            .then(response => response.json())
            .then(json => dispatch(fetchContacts()))
    }
}

export function fetchContacts() {
    return dispatch => {
        return fetch('http://localhost:9000/contacts')
            .then(response => response.json())
            .then(json => dispatch(completeAction('CONTACTS_LOADED', json)))
    }
}
