import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onShowClick = () =>{
        this.setState({showContactInfo: !this.state.showContactInfo});
    }

    onDeleteClick = async (id, dispatch, setRespStatus)=>{
        await axios.delete(`http://localhost:3004/users/${id}`)
        setRespStatus('done');
        dispatch({type: 'DELETE_CONTACT', payload: id});

    }

    onEditClick = (id, e) => {
        e.preventDefault();
        this.props.history.push(`/contact/edit/${id}`);
    }


    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state
        return (
            <Consumer>
                {value => {
                    const { dispatch, setRespStatus } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name} 
                                <i onClick={this.onShowClick} className="fa fa-sort-down" style={{cursor: 'pointer'}}></i>
                                <i className="fa fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}} onClick={this.onDeleteClick.bind(this,id, dispatch, setRespStatus)}></i>
                                <Link to={`/contact/edit/${id}`}>
                                    <i className="fa fa-pencil" 
                                        style={
                                        {cursor: 'pointer',
                                        float: 'right',
                                        color: 'black',
                                        marginRight: '1rem'
                                        }
                                        }>
                                    </i></Link>
                            </h4>
                            {showContactInfo ? 
                            <ul className="list-group">
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul> : null
                            }
                            
                        </div>
                    )
                }}
            </Consumer>


        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;