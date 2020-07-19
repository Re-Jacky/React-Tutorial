import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { notifyUsers } from '../../actions/notifyAction';
import Alert from '../layout/Alert';


class Registration extends Component {
    state = {
        email: '',
        password: ''
    };

    componentWillMount(){
        const { allowRegistration } = this.props.settings;
        if(!allowRegistration){
            this.props.history.push('/')
        }
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const { firebase, notifyUsers } = this.props;
        const { email, password } = this.state;

        //Register
        firebase.createUser({email, password}).catch(err => notifyUsers(err.message,'error'))
    }

    render() {
        const { message, messageType } = this.props.notify;


        return (
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            {message? ( <Alert message={message} messageType={messageType}/>): null}
                            <h1 className="text-center pb-4 pt-3">
                                <span className="text-primary">
                                    <i className="fa fa-lock"></i>
                                    {' '}Register
                                </span>
                            </h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" className="form-control" required value={this.state.email} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" className="form-control" required value={this.state.password} onChange={this.onChange} />
                                </div>
                                <input type="submit" value="Register" className="btn btn-primary btn-block"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, props)=>({
    notify: state.notify,
    settings: state.settings
})

export default compose(
    firebaseConnect(),
    connect(mapStateToProps, {notifyUsers})
)(Registration);