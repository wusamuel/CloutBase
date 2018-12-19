const INIT_STATE = {
  isImportContactsFromCSVModalOpen: false
}

const TOGGLE_IMPORT_CONTACT_CSV_MODAL = 'ui/TOGGLE_IMPORT_CONTACT_CSV_MODAL';

// Reducer
export default function reducer(state = INIT_STATE, action = {}) {
  switch(action.type) {
    case TOGGLE_IMPORT_CONTACT_CSV_MODAL:
      return {...state, isImportContactsFromCSVModalOpen: action.isActive};
    default: return state;
  }
}

export const toggleImportContactCSVModal = (isActive) => ({
  type: TOGGLE_IMPORT_CONTACT_CSV_MODAL,
  isActive
})
