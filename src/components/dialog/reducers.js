const stateDefaults = {
    dialogType: 'create',
    visibility: 'hidden'
};

const dialog = (state = stateDefaults, action) => {
    const visibilityUpdate = {
        ...state,
        dialogType: action.dialogType,
        visibility: action.visibility
    };
    switch (action.type) {
        case 'SHOW_CREATE_DIALOG':
            return visibilityUpdate;

        case 'HIDE_CREATE_DIALOG':
            return visibilityUpdate;
        default:
            return state
    }
}

export default dialog
