import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getContact, udpateContact } from '../../actions/contactAction'
import TestInputGroup from '../layout/TestInputGroup'
import { withRouter } from 'react-router-dom'



class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    componentWillReceiveProps(nextProps){
        const { name, email, phone } = nextProps.contact;
        this.setState({
            name,
            email,
            phone
        })
    }

    componentDidMount(){
        const { id } = this.props.match.params
        this.props.getContact(id);
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    onSubmit = async (e) => {
        e.preventDefault();
        const { id } = this.props.match.params;
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
            // id: uuid(),
            name,
            email,
            phone
        }

        await this.props.udpateContact(id,newContact)

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });


        this.props.history.push('/');

    }

    render() {
        const { name, email, phone, errors} = this.state;
        return (
                <div className="card mb-3">
                    <div className="card-header">Edit Contact</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <TestInputGroup label='Name' name='name' placeholder='Enter name...' value={name} onChange={this.onChange} error={errors.name}/>
                            <TestInputGroup label='Email' type='email' name='email' placeholder='Enter email...' value={email} onChange={this.onChange} error={errors.email}/>
                            <TestInputGroup label='Phone' name='phone' placeholder='Enter phone...' value={phone} onChange={this.onChange} error={errors.phone}/>
                            <input type="submit" value="Update Contact" className="btn btn-block bg-light"/>
                        </form>
                    </div>
                </div>
        )
    }
}


EditContact.propTypes = {
    // contact: PropTypes.object.isRequired,
    getContact: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    contact: state.contact.currentContact
})

export default withRouter(connect(mapStateToProps,{getContact, udpateContact})(EditContact));