
const updateContacts = contacts => ({
    type: 'CONTACTS_LOADED',
    payload: contacts
});

export function fetchContacts() {
    return dispatch => {
        return fetch('http://localhost:9000/contacts')
            .then(response => response.json())
            .then(json => dispatch(updateContacts(json)))
    }
}

export const selectContact = id => ({
    type: 'CONTACT_SELECTED',
    payload: id
});
