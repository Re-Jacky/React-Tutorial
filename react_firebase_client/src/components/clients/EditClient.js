import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';


class EditClient extends Component {
    constructor(props){
        super(props);
        
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.emailRef = React.createRef();
        this.phoneRef = React.createRef();
        this.balanceRef = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { client, firestore } = this.props;

        const updateClient = {
            firstName: this.firstNameRef.current.value,
            lastName: this.lastNameRef.current.value,
            email: this.emailRef.current.value,
            phone: this.phoneRef.current.value,
            balance: this.balanceRef.current.value === '' ? 0 : this.balanceRef.current.value
        }

        firestore.update({ collection: 'clients', doc: client.id}, updateClient).then(()=> this.props.history.push('/'))
    }
    render() {
        const { client } = this.props;
        const { disableBalanceOnEdit } = this.props.settings;

        if (client){
            const { firstName, lastName, email, phone, balance } = client;
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/" className="btn btn-block text-primary text-left">
                                <i className="fa fa-arrow-circle-left" /> Back To Dashboard
                            </Link>
                        </div>
                    </div>
    
                    <div className="card">
                        <div className="card-header">Edit Client</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" name="firstName" minLength="2" className="form-control" onChange={this.onChange} defaultValue={firstName} ref={this.firstNameRef}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" name="lastName" minLength="2" className="form-control" onChange={this.onChange} defaultValue={lastName} ref={this.lastNameRef}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" className="form-control" onChange={this.onChange} defaultValue={email} ref={this.emailRef}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" name="phone" className="form-control" onChange={this.onChange} defaultValue={phone} ref={this.phoneRef}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="balance">Balance</label>
                                    <input type="text" name="balance" className="form-control" onChange={this.onChange} defaultValue={balance} ref={this.balanceRef} disabled={disableBalanceOnEdit}/>
                                </div>
                                <input type="submit" value="Update" className="btn btn-primary btn-block"/>
                            </form>
                        </div>
    
                    </div>
    
                </div>
            )
        } else{
            return <Spinner />
        }
    }
}

export default withRouter(compose(
    firestoreConnect(props => [
        {collection: 'clients', storeAs: 'client', doc: props.match.params.id}
    ]),
    connect(({firestore: {ordered}, settings})=>({
        client: ordered.client && ordered.client[0],
        settings
    }))
)(EditClient));