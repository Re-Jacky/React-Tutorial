import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from '../actions/types'


const initialState = {
    contacts: [],
    currentContact: []
}
const contactReducer =function(state=initialState, action) {
    switch(action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            };
        case  ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload] 
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case GET_CONTACT:
            return {
                ...state,
                currentContact: action.payload
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contact: state.contacts.map(contact => contact.id === action.payload.id? (contact=action.payload) : contact)
            }
        default:
            return state;
    }       
}

export default contactReducer;