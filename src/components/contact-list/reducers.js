const stateDefaults = {
    contacts: [],
    selected: 0,
    search_term: ''
};

const contactList = (state = stateDefaults, action) => {
    switch (action.type) {
        case 'CONTACTS_LOADED':
            return {
                ...state,
                contacts: action.payload
            };

        case 'CONTACT_SELECTED':
            return {
                ...state,
                selected: action.payload
            };

        case 'SEARCH_CONTACT':
            return {
                ...state,
                search_term: action.payload
            };

        case 'HIDE_CONTACT_DETAILS':
            return {
                ...state,
                selected: action.selected
            };

        default:
            return state;
    }
}

export default contactList;
