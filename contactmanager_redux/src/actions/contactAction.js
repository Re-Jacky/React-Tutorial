import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, GET_CONTACT, UPDATE_CONTACT } from './types'
import axios from 'axios'

export const getContacts = () => async dispatch => {
    const res = await axios.get('http://localhost:3004/users');
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    }) 
};


export const deleteContacts = (id) => async dispatch => {
    await axios.delete(`http://localhost:3004/users/${id}`)
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    });
};

export const addContact = (contact) => async dispatch => {
    const res = await axios.post('http://localhost:3004/users',contact)
    dispatch({
        type: ADD_CONTACT,
        payload: res.data
    });
};

export const getContact = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:3004/users/${id}`)
    dispatch({
        type: GET_CONTACT,
        payload: res.data
    })
};

export const udpateContact = (id,contact) => async dispatch => {
    const res = await axios.put(`http://localhost:3004/users/${id}`,contact)
    dispatch({
        type: UPDATE_CONTACT,
        payload: res.data
    })
}