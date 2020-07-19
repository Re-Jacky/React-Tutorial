import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteContacts } from '../../actions/contactAction'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class Contact extends Component {
    state = {
        showContactInfo: true
    }

    onDeleteClick = (id) => {
        this.props.deleteContacts(id)
    }

    expandUser = (e) => {
        this.setState({showContactInfo: !this.state.showContactInfo})
    }

    editContact = (id, e) => {
        e.preventDefault();
        this.props.history.push(`/contact/edit/${id}`)
    }

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        return (
            <div className="card card-body mb-3">
                <h4>{name}
                    <i className="fa fa-sort-down" style={{cursor: 'pointer'}} onClick={this.expandUser}></i>
                    <i className="fa fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}} onClick={this.onDeleteClick.bind(this, id)}></i>
                    <i className="fa fa-pencil" style={{cursor: 'pointer', float: 'right'}} onClick={this.editContact.bind(this, id)}></i>
                </h4>
                {showContactInfo ? <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul> : null}
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteContacts: PropTypes.func.isRequired
}



export default withRouter(connect(null, {deleteContacts})(Contact));