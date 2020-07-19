import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type){
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        case 'EDIT_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? contact = action.payload : contact)
            }
        default:
            return state;
    }
}


export class Provider extends Component {
    state = {
        contacts: [],
        dispatch: action => this.setState(reducer(this.state,action)),
        setRespStatus: status => this.setState({respStatus: status})
    }

    async componentDidMount(){
        axios.interceptors.request.use(config => {
            // Do something before request is sent
            this.setState({respStatus: 'loading'})
            return config;
          }, error => {
            // Do something with request error
            return Promise.reject(error);
          });
        
        const resp = await axios.get('http://localhost:3004/users')

        this.setState({contacts: resp.data})
        this.state.setRespStatus('done')
    }

    render(){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


export const Consumer = Context.Consumer;

