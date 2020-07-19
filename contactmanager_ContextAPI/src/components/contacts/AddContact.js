import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';


class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {name:'',email:'',phone:''}
    }

    onContactChange = (e) => this.setState({[e.target.name]: e.target.value})

    onFormSubmit = async (dispatch, setRespStatus, e) => {
        e.preventDefault();

       
        const { name, email, phone } = this.state;

        if(name === ''){
            this.setState({errors: {name: 'Name is required'}})
            return;
        }
        if(email === ''){
            this.setState({errors: {email: 'Email is required'}})
            return;
        }
        if(phone === ''){
            this.setState({errors: {phone: 'Phone is required'}})
            return;
        }

        const newContact = {
            name,
            email,
            phone
        }

        const resp = await axios.post('http://localhost:3004/users',newContact)

        dispatch({type: "ADD_CONTACT", payload: resp.data})
        setRespStatus('done')
        
        this.setState({name: '', email: '', phone: '', errors: {}})
        
        this.props.history.push('/')
        
    }
    
    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch, setRespStatus} = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onFormSubmit.bind(this, dispatch, setRespStatus)}>
                                    <TextInputGroup label="Name" name="name" value={name} placeholder="Enter Name..." onChange={this.onContactChange} error={errors.name || ''}/>
                                    <TextInputGroup label="Email" name="email" value={email} placeholder="Enter Email..." onChange={this.onContactChange} type='email' error={errors.email || ''}/>
                                    <TextInputGroup label="Phone" name="phone" value={phone} placeholder="Enter Phone..." onChange={this.onContactChange} error={errors.phone || ''}/>
                                    <input type="submit" value="Add Contact" className="btn btn-block btn-light"/>
                                </form>
                            </div>
                        </div>
                    )
 
                }}
            </Consumer>


        )
    }
}

export default AddContact;