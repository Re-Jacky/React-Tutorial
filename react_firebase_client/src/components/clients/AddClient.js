import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class AddClient extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        balance: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e)=>{
        e.preventDefault();

        const newClient = this.state;

        const { firestore } = this.props;

        if (newClient.balance === ''){
            newClient.balance = 0;
        }

        firestore.add({ collection: 'clients'}, newClient).then(()=> {
            this.props.history.push('/')
        })
    }

    render() {
        const { firstName, lastName, email, phone, balance } = this.state;

        const { disableBalanceOnAdd } = this.props.settings;
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
                    <div className="card-header">Add Client</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" minLength="2" className="form-control" onChange={this.onChange} value={firstName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" minLength="2" className="form-control" onChange={this.onChange} value={lastName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="form-control" onChange={this.onChange} value={email}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" name="phone" className="form-control" onChange={this.onChange} value={phone}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="balance">Balance</label>
                                <input type="text" name="balance" className="form-control" onChange={this.onChange} value={balance} disabled={disableBalanceOnAdd}/>
                            </div>
                            <input type="submit" value="Submit" className="btn btn-primary btn-block"/>
                        </form>
                    </div>

                </div>

            </div>
        )
    }
}

AddClient.propTypes = {
    firestore: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired   
}

// export default withRouter(firestoreConnect()(AddClient));

export default withRouter(compose(
    firestoreConnect(),
    connect((state,props)=>({
        settings: state.settings
    })
    ,null)
)(AddClient))