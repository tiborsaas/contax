const stateDefaults = {
    contacts: [],
    selected: 0
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
        default:
            return state;
    }
}

export default contactList
