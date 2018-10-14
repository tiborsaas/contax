
const completeAction = (type, payload) => ({
    type,
    payload
});


const config = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};


export function updateContact(contact) {
    config.method = 'PUT';
    return dispatch => {
        return fetch('http://localhost:9000/contacts', config)
            .then(response => response.json())
            .then(json => dispatch(completeAction('CONTACT_UPDATED', json)))
    }
}


export function createContact(contact) {
    config.method = 'POST';
    return dispatch => {
        return fetch('http://localhost:9000/contacts', config)
            .then(response => response.json())
            .then(json => dispatch(completeAction('CONTACT_CREATED', json)))
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
