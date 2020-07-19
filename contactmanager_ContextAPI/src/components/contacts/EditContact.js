import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';


class EditContact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {name:'',email:'',phone:'',update: ''}
        };
        this.defaultContact = {}
    }
    

    async componentDidMount(){
        const {id} = this.props.match.params;
        const resp = await axios.get(`http://localhost:3004/users/${id}`);

        this.setState(resp.data);
        const { name, email, phone } = resp.data;
        this.defaultContact = {name, email, phone};


    }

    onContactChange = (e) => this.setState({[e.target.name]: e.target.value})

    onFormSubmit = async (dispatch, setRespStatus, e) => {
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

        // update the contact
        const updateContact = {
            name,
            email,
            phone
        }

        if(JSON.stringify(updateContact) === JSON.stringify(this.defaultContact)){
            this.setState({errors: {update: 'Nothing changed!'}})
            return;
        }
        const resp = await axios.put(`http://localhost:3004/users/${id}`,updateContact)

        setRespStatus('done')

        dispatch({type: 'EDIT_CONTACT', payload: resp.data})

        this.setState={name: '', email: '', phone: '', errors: {}}
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
                            <div className="card-header">Edit Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onFormSubmit.bind(this, dispatch, setRespStatus)}>
                                    <TextInputGroup label="Name" name="name" value={name} placeholder="Enter Name..." onChange={this.onContactChange} error={errors.name || ''}/>
                                    <TextInputGroup label="Email" name="email" value={email} placeholder="Enter Email..." onChange={this.onContactChange} type='email' error={errors.email || ''}/>
                                    <TextInputGroup label="Phone" name="phone" value={phone} placeholder="Enter Phone..." onChange={this.onContactChange} error={errors.phone || ''}/>
                                    <input type="submit" value="Update Contact" className="btn btn-block btn-light" />
                                    {errors.update && <p className="text-danger text-center">Nothing Changed!</p>}
                                </form>
                            </div>
                        </div>
                    )
 
                }}
            </Consumer>


        )
    }
}

export default EditContact;