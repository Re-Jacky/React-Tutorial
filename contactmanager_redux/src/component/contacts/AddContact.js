import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addContact } from '../../actions/contactAction'
import TestInputGroup from '../layout/TestInputGroup'
// import { v1 as uuid} from 'uuid'
import { withRouter } from 'react-router-dom'



class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    onSubmit = async (name, email, phone, e) => {
        e.preventDefault();
        
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
            // id: uuid(),
            name,
            email,
            phone
        }

        await this.props.addContact(newContact);

        this.props.history.push('/');

    }

    render() {
        const { name, email, phone, errors} = this.state;
        return (
                <div className="card mb-3">
                    <div className="card-header">Add Contact</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit.bind(this, name, email, phone)}>
                            <TestInputGroup label='Name' name='name' placeholder='Enter name...' value={name} onChange={this.onChange} error={errors.name}/>
                            <TestInputGroup label='Email' type='email' name='email' placeholder='Enter email...' value={email} onChange={this.onChange} error={errors.email}/>
                            <TestInputGroup label='Phone' name='phone' placeholder='Enter phone...' value={phone} onChange={this.onChange} error={errors.phone}/>
                            <input type="submit" value="Add Contact" className="btn btn-block bg-light"/>
                        </form>
                    </div>
                </div>
        )
    }
}

AddContact.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default withRouter(connect(null,{addContact})(AddContact));